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
import {Montserrat, hp, normalize} from '../../../../utils/Constants';
import useReduxStore from '../../hooks/useReduxStore';
import {GetPhoneBank} from '../../api/PhoneBankApi';
import {ToastMessageDark} from '../../components/GlobalComponent/DisplayMessage';
import CompaignCard from '../../components/CompaignSelection/CompaignCard';

const PhoneBankingRecords = ({navigation}) => {
  const {user, campaign} = useReduxStore();
  const [data, setData] = useState(null);

  useEffect(() => {
    getPhoneBank();
  }, []);

  const getPhoneBank = async () => {
    try {
      const res = await GetPhoneBank({
        campaignId: campaign.campaignId,
        teamMemberEmail: user.email,
      });
      if (res.data.success) {
        setData(res.data.records);
      } else {
        ToastMessageDark(res.data.message);
      }
    } catch (error) {
      ToastMessageDark('Something went wrong');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.ongingbox}>
        <Text style={styles.ongoingtxt}>Phone Bank</Text>
      </View>
      <ScrollView contentContainerStyle={styles.compaignBox}>
        {data?.map((item, index) => (
          <CompaignCard
            key={index}
            name={item.recordName}
            status={item.active == 'Active'}
            onPress={() => navigation.navigate('VoterCheck', {item})}
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
