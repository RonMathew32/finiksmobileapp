import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/GlobalComponent/Header';
import {hp, normalize} from '../../theme/dimensions';
import {Montserrat} from '../../theme/fonts';
import useReduxStore from '../../hooks/useReduxStore';
import {GetPhoneBank} from '../../api/PhoneBankApi';
import {ToastMessageDark} from '../../components/GlobalComponent/DisplayMessage';
import CompaignCard from '../../components/CompaignSelection/CompaignCard';
import { getPhoneBankRecords, setPhoneBankRecords } from '../../redux/actions/phonebank.actions';
import routes from '../../constants/routes';

const PhoneBankingRecords = ({navigation}) => {
  const {user, currentCampaign, token, dispatch, phoneBankRecords} = useReduxStore();

  useEffect(() => {
    getPhoneBank();
  }, []);

  const getPhoneBank = async () => {
    const payload = {
      campaignId: currentCampaign.campaignId,
      teamMemberEmail: user.email,
    }
    dispatch(getPhoneBankRecords({payload, ToastMessageDark, token, role: user?.role}))
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.ongingbox}>
        <Text style={styles.ongoingtxt}>Phone Bank</Text>
      </View>
      <ScrollView contentContainerStyle={styles.compaignBox}>
        {phoneBankRecords?.map((item, index) => (
          <CompaignCard
            key={index}
            name={item.recordName}
            status={item.active == 'Active'}
            onPress={() => navigation.navigate(routes?.VoterCheck, {item})}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneBankingRecords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ongingbox: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    paddingBottom: hp(1.5),
    marginTop: hp(9),
    borderBottomColor: '#D9D9D9',
    width: '45%',
    alignItems: 'center',
  },
  ongoingtxt: {
    fontFamily: Montserrat,
    fontSize: normalize(18),
    color: '#A6A6A6',
  },
  compaignBox: {
    alignItems: 'center',
    marginTop: hp(5),
  },
});
