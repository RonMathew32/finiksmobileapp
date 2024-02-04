import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useReduxStore = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {token, user} = useSelector(state => state.authRed);
  const {allCampaign, currentCampaign, campaignId} = useSelector(state => state?.campRed);
  const {phoneBankRecords, currentRecord} = useSelector(state => state?.phoneBankRed);
  const {
    votersList,
    customTags,
    campaignTags,
    survey,
    script,
    scriptId,
    campaignOwnerID,
    currentVoter,
    unDoneVoters,
    votersTag,
    listDone,
    listId,
  } = useSelector(state => state?.voteRed);

  return {
    token,
    user,
    dispatch,
    loading,
    setLoading,
    allCampaign,
    currentCampaign,
    phoneBankRecords,
    votersList,
    customTags,
    campaignTags,
    survey,
    script,
    scriptId,
    campaignOwnerID,
    currentVoter,
    unDoneVoters,
    votersTag,
    listId,
    listDone,
    currentRecord,
    campaignId
  };
};

export default useReduxStore;
