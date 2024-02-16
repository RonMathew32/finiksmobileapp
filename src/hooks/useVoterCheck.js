import {useCallback, useEffect, useState} from 'react';
import {
  ToastMessageDark,
  ToastMessageLight,
} from '../utils/DisplayMessage';
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
import {STRINGS} from '../constants/strings';
import {useNavigation} from '@react-navigation/native';

const useVoterCheck = item => {
  const navigation = useNavigation();
  const {
    currentCampaign,
    dispatch,
    token,
    user,
    votersList,
    scriptId,
    listId,
    listDone,
    loading,
    setLoading
  } = useReduxStore();

  useEffect(() => {
    GetUsersData();
  }, [item]);

  useEffect(()=>{
    if(votersList?.length){
      setData()
    }
  },[votersList])


  const phoneBankFactory = () => {
    dispatch(
      getCampaignTags({
        payload: {id: currentCampaign.campaignId},
        param: STRINGS.TEXT_TAGS_PARAM,
        successAction: setCampaignTags,
        // ToastMessageLight,
        token,
        setLoading,
        role: user?.role,
      }),
    );
    dispatch(
      getSurveyList({
        payload: {id: currentCampaign.campaignId},
        param: STRINGS.TEXT_SURVEY_PARAM,
        successAction: setSurveyList,
        // ToastMessageLight,
        token,
        setLoading,
        role: user?.role,
      }),
    );
    dispatch(
      getScript({
        payload: {id: item?.scriptId || scriptId},
        param: STRINGS.TEXT_SCRIPT_PARAM,
        successAction: setScript,
        // ToastMessageLight,
        token,
        setLoading,
        role: user?.role,
      }),
    );
    dispatch(
      getCustomTags({
        param: STRINGS.TEXT_CUSTOM_TAG_PARAM,
        successAction: setCustomTags,
        // ToastMessageLight,
        token,
        setLoading,
        role: user?.role,
      }),
    );
  };

  const setData = useCallback(() =>{
    if (votersList?.length) {
      const unDoneVoters = votersList?.filter(value => !value.voterDone);
      console.log(unDoneVoters?.length, 'undone voters', listDone);
      if(unDoneVoters?.length && listDone == false){
        console.log('CURRENT VOTER SET');
        dispatch(setUndoneVoters(unDoneVoters));
        dispatch(setCurrentVoter(unDoneVoters[0]));
        dispatch(setVotersTag(unDoneVoters[0]?.voterTags));
      } else {
        ToastMessageDark('List is completed');
        dispatch(setVoterList({list : {voters : []}}))
        navigation.goBack();
      }
    }
  },[votersList, dispatch, navigation])

  const GetUsersData = () => {
    dispatch(
      getVoterList({
        payload: {id: item?.list || listId },
        param: STRINGS.TEXT_VOTER_LIST_PARAM,
        onSuccess: phoneBankFactory,
        successAction: setVoterList,
        ToastMessageLight,
        token,
        setLoading,
        role: user?.role,
      }),
    );
  };

  return { GetUsersData, loading, };
};

export default useVoterCheck;
