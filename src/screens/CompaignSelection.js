import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CompaignHeader from '../components/CompaignSelection/CompaignHeader';
import ProfileView from '../components/GlobalComponent/ProfileView';
import {Montserrat, hp, normalize, wp} from '../../utils/Constants';
import CompaignCard from '../components/CompaignSelection/CompaignCard';
import {logo, plusicon} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';
import useReduxStore from '../hooks/useReduxStore';

const CompaignSelection = () => {
  const {user} = useReduxStore();
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate('Authenticated');
  };
  return (
    <SafeAreaView style={styles.container}>
      <CompaignHeader />
      <ProfileView />
      <View style={styles.ongingbox}>
        <Text style={styles.ongoingtxt}>Ongoing Campaigns</Text>
      </View>
      <View style={styles.compaignBox}>
        <CompaignCard
          name="Hannah Jacobs for congress"
          status={true}
          onPress={() => navigateTo()}
        />
        <CompaignCard
          name="Hannah Jacobs for congress"
          status={false}
          onPress={() => navigateTo()}
        />
      </View>
      <View style={styles.bottombox}>
        <Text style={styles.jointxt}>Join A New Campaign</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('OtpVerify', {type: 'campaignn', data: user})
          }
          style={styles.plusbox}>
          <Image
            style={styles.plusicon}
            source={plusicon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

export default CompaignSelection;

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
    borderBottomColor: '#A6A6A6',
  },
  ongoingtxt: {
    fontFamily: Montserrat,
    fontSize: normalize(16),
    color: '#A6A6A6',
  },
  compaignBox: {
    alignItems: 'center',
    marginTop: hp(5),
  },
  bottombox: {
    marginTop: hp(8),
    alignItems: 'center',
  },
  jointxt: {
    fontFamily: Montserrat,
    fontSize: normalize(16),
    color: '#A6A6A6',
  },
  plusbox: {
    backgroundColor: '#D12E2F',
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(10) / 2,
    marginTop: hp(4),
  },
  plusicon: {
    width: wp(5.5),
    height: wp(5.5),
    tintColor: 'white',
  },
  logo: {
    width: wp(19),
    height: hp(6),
    marginTop: hp(10),
  },
});
