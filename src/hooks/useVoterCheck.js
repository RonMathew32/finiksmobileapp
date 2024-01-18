import {useEffect, useState} from 'react';
import {
  ToastMessageDark,
  ToastMessageLight,
} from '../components/GlobalComponent/DisplayMessage';
import useReduxStore from './useReduxStore';
import {
  getCampaignTags,
  getCustomTags,
  getScript,
  getSurveyList,
  getVoterList,
  setCampaignTags,
  setCurrentVoter,
  setCustomTags,
  setScript,
  setSurveyList,
  setUndoneVoters,
  setVoterList,
  setVotersTag,
} from '../redux/actions/voters.actions';
import {useSelector} from 'react-redux';
import {STRINGS} from '../constants/strings';

const useVoterCheck = (item, navigation) => {
  const {currentCampaign, loading, setLoading, dispatch, token, user} =
    useReduxStore();
  const {
    votersList,
    customTags,
    campaignTags,
    survey,
    script,
    campaignOwnerID,
    currentVoter,
    undoneVoters,
    votersTag
  } = useSelector(state => state?.voteRed);

  useEffect(() => {
    GetUsersData();
  }, [item]);

  const phoneBankFactory = () => {
    dispatch(
      getCampaignTags({
        payload: {id: currentCampaign.campaignId},
        param: STRINGS.TEXT_TAGS_PARAM,
        successAction: setCampaignTags,
        ToastMessageLight,
        token,
        role: user?.role,
      }),
    );
    dispatch(
      getSurveyList({
        payload: {id: currentCampaign.campaignId},
        param: STRINGS.TEXT_SURVEY_PARAM,
        successAction: setSurveyList,
        ToastMessageLight,
        token,
        role: user?.role,
      }),
    );
    dispatch(
      getScript({
        payload: {id: item.scriptId},
        param: STRINGS.TEXT_SCRIPT_PARAM,
        successAction: setScript,
        ToastMessageLight,
        token,
        role: user?.role,
      }),
    );
    dispatch(
      getCustomTags({
        param: STRINGS.TEXT_CUSTOM_TAG_PARAM,
        successAction: setCustomTags,
        ToastMessageLight,
        token,
        role: user?.role,
      }),
    );
  };

  const GetUsersData = () => {
    dispatch(
      getVoterList({
        payload: {id: item?.list},
        param: STRINGS.TEXT_VOTER_LIST_PARAM,
        onSuccess: phoneBankFactory,
        successAction: setVoterList,
        ToastMessageLight,
        token,
        role: user?.role,
      }),
    );
    if (votersList?.length) {
      const voters = votersList?.filter(value => !value.voterDone);
      dispatch(setCurrentVoter(voters.length + 1));
      dispatch(setUndoneVoters(voters))
      dispatch(setVotersTag(voters[voters.length - 1].voterTags))
    } else {
      ToastMessageDark('Already Finished');
      navigation.goBack();
    }
  };

  return {
    votersList,
    undoneVoters,
    votersTag,
    campaignTags,
    customTags,
    survey,
    script,
    loading,
    setLoading,
    currentVoter,
    campaignOwnerID,
  };
};

export default useVoterCheck;
