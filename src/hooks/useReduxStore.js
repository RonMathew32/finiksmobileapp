import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useReduxStore = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const {token, user} = useSelector(state => state.authRed);
  const {allCampaign, currentCampaign} = useSelector(state => state?.campRed)
  const {phoneBankRecords} = useSelector(state => state?.phoneBankRed )

  return {token, user, dispatch, loading, setLoading, allCampaign, currentCampaign, phoneBankRecords};
};

export default useReduxStore;
