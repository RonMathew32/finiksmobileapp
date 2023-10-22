import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useReduxStore = () => {
  const dispatch = useDispatch();
  const {token, user} = useSelector(state => state.userReducer);
  const {loading} = useSelector(state => state.campaignReducer);
  return {token, user, loading, dispatch};
};

export default useReduxStore;
