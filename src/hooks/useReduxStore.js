import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useReduxStore = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const {token, user} = useSelector(state => state.authRed);
  return {token, user, dispatch, loading, setLoading};
};

export default useReduxStore;
