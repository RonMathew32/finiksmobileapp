import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileView from '../../../components/GlobalComponent/ProfileView';
import CompaignHeader from '../../../components/CompaignSelection/CompaignHeader';
import Header from '../../../components/GlobalComponent/Header';
import {Montserrat, hp, normalize} from '../../../../utils/Constants';
import CompaignCard from '../../../components/CompaignSelection/CompaignCard';
import {useNavigation} from '@react-navigation/native';

const PhoneBank = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('VoterCheck');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProfileView />
      <View style={styles.ongingbox}>
        <Text style={styles.ongoingtxt}>Phone Banking</Text>
      </View>
      <View style={styles.compaignBox}>
        <CompaignCard
          name="Use your own phone number"
          status={true}
          onPress={navigate}
        />
        <CompaignCard
          name="Use Auto-dialer"
          status={false}
          onPress={navigate}
        />
        <CompaignCard
          name="Use Predictive dialer"
          status={false}
          onPress={navigate}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhoneBank;

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
