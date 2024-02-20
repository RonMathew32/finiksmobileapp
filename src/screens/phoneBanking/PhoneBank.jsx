import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileView from '../../components/ProfileView';
import CampaignHeader from '../../components/Headers/CampaignHeader';
import HomeHeader from '../../components/Headers/HomeHeader';
import {hp, normalize} from '../../theme/dimensions';
import {Montserrat} from '../../theme/fonts';
import CampaignCard from '../../components/CampaignCard';
import routes from '../../constants/routes';
import { COLORS } from '../../theme/colors';
import stylee from '../../constants/stylee';

const PhoneBank = ({navigation}) => {

  const navigateTo = () => {
    navigation.navigate(routes?.PhoneBankingRecords);
  };

  return (
    <SafeAreaView style={stylee.container}>
      <HomeHeader />
      <ProfileView />
      <View style={[styles.ongingbox, stylee.alignSelf]}>
        <Text style={styles.ongoingtxt}>Phone Banking</Text>
      </View>
      <View style={styles.compaignBox}>
        <CampaignCard
          name="Use your own phone number"
          status={true}
          onPress={navigateTo}
        />
        <CampaignCard
          name="Use Auto-dialer"
          status={false}
          onPress={navigateTo}
        />
        <CampaignCard
          name="Use Predictive dialer"
          status={false}
          onPress={navigateTo}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhoneBank;

const styles = StyleSheet.create({
  ongingbox: {
    borderBottomWidth: 1,
    paddingBottom: hp(1.5),
    marginTop: hp(9),
    borderBottomColor: COLORS.lavendarWhiteDim,
    width: '45%',
  },
  ongoingtxt: {
    fontFamily: Montserrat,
    fontSize: normalize(18),
    color: COLORS.lavendarWhiteDark,
  },
  compaignBox: {
    alignItems: 'center',
    marginTop: hp(5),
  },
});
