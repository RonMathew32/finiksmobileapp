import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Header from '../../components/GlobalComponent/Header';
import {hp, normalize} from '../../theme/dimensions';
import {Montserrat} from '../../theme/fonts';
import useReduxStore from '../../hooks/useReduxStore';
import {ToastMessageLight} from '../../components/GlobalComponent/DisplayMessage';
import CampaignCard from '../../components/CampaignSelection/CampaignCard';
import {
  getPhoneBankRecords,
  setRecord,
} from '../../redux/actions/phonebank.actions';
import routes from '../../constants/routes';
import {setScriptId} from '../../redux/actions/voters.actions';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import { COLORS } from '../../theme/colors';

const PhoneBankingRecords = ({navigation}) => {
  const {
    user,
    currentCampaign,
    token,
    dispatch,
    phoneBankRecords,
    setLoading,
    loading,
  } = useReduxStore();

  const commonAPIPayload = {
    ToastMessageLight,
    token,
    role: user?.role,
  }
  useEffect(() => {
    getPhoneBank();
  }, []);

  const getPhoneBank =  useCallback(() => {
    const payload = {
      campaignId: currentCampaign.campaignId,
      teamMemberEmail: user.email,
    };
    dispatch(
      getPhoneBankRecords({
        ...commonAPIPayload,
        payload,
        setLoading,
      }),
    );
  },[currentCampaign, user, setLoading]);

  const navigateToVoterCheck = useMemo(() => item => {
      if (item) {
        dispatch(setRecord(item));
        dispatch(setScriptId(item?.scriptId));
        navigation.navigate(routes?.VoterCheck, { item });
      } else {
        // Handle the case when item is not available or data is not loaded
        console.error('Data not available');
      }
    },
    [dispatch, navigation, routes?.VoterCheck]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.ongingbox}>
        <Text style={styles.ongoingtxt}>Phone Bank</Text>
      </View>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView contentContainerStyle={styles.compaignBox}>
          {phoneBankRecords?.map((item, index) => (
            <CampaignCard
              key={index}
              name={item.recordName}
              status={item.active == 'Active'}
              onPress={() => navigateToVoterCheck(item)}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default PhoneBankingRecords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  ongingbox: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    paddingBottom: hp(1.5),
    marginTop: hp(9),
    borderBottomColor: COLORS.lavendarWhiteDim,
    width: '45%',
    alignItems: 'center',
  },
  ongoingtxt: {
    fontFamily: Montserrat,
    fontSize: normalize(18),
    color: COLORS.lavendarWhiteDark,
  },
  compaignBox: {
    alignItems: 'center',
    padding: hp(1),
    marginVertical: hp(2)
  },
});
