import React, {useEffect, useState} from 'react';
import {GetVoterCheckData, GetVoterCheckDataAdmin} from '../api/PhoneBankApi';
import {ToastMessageDark} from '../components/GlobalComponent/DisplayMessage';
import useReduxStore from './useReduxStore';

// getlist
// /api/teammember/getscript
// /api/teammember/gettags
// /api/teammember/getadmintags
// /api/teammember/getsurvey

const useVoterCheck = (item, navigation) => {
  const {campaign} = useReduxStore();
  const [current, setCurrent] = useState(0);
  const [campaignOwnerId, setCampaignOwnerId] = useState('');
  const [list, setList] = useState([]);
  const [tags, setTags] = useState([]);
  const [customTags, setCustomTags] = useState([]);
  const [adminTags, setAdminTags] = useState([]);
  const [surveyList, setSurveyList] = useState([]);
  const [script, setScript] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetUsersData();
  }, [item]);

  const getVoterTags = async () => {
    setLoading(true);
    try {
      const cTags = await GetVoterCheckData({
        id: campaign.campaignId,
        type: 'gettags',
      });
      const aTags = await GetVoterCheckDataAdmin({
        type: 'getadmintags',
      });
      const survey = await GetVoterCheckData({
        id: campaign.campaignId,
        type: 'getsurvey',
      });
      const script = await GetVoterCheckData({
        id: item.scriptId,
        type: 'getscript',
      });
      if (
        cTags.data.success &&
        aTags.data.success &&
        survey.data.success &&
        script.data.success
      ) {
        setCustomTags(cTags.data.tags);
        setAdminTags(aTags.data.tags);
        setSurveyList(survey.data.survey.surveyQuestions);
        setScript(script.data.script);
      } else {
        ToastMessageDark('Error in finding');
      }
    } catch (error) {
      ToastMessageDark('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const GetUsersData = async () => {
    setLoading(true);
    try {
      const res = await GetVoterCheckData({id: item?.list, type: 'getlist'});
      await getVoterTags();
      if (res.data.success) {
        if (res.data.list.voters.length > 0) {
          const voters = res.data.list.voters.filter(
            (value, index) => !value.voterDone,
          );
          if (voters.length > 0) {
            setCampaignOwnerId(res.data.list.campaignOwnerId);
            setCurrent(voters.length - 1);
            setTags(voters[voters.length - 1].voterTags);
            setList(voters);
          } else {
            ToastMessageDark('Already Finished');
            navigation.goBack();
          }
        }
      } else {
        ToastMessageDark(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    list,
    current,
    setCurrent,
    tags,
    setTags,
    customTags,
    adminTags,
    surveyList,
    script,
    loading,
  };
};

export default useVoterCheck;
