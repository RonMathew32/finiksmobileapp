import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CompaignHeader from '../../components/CompaignSelection/CompaignHeader';
import ProfileView from '../../components/GlobalComponent/ProfileView';
import CompaignCard from '../../components/CompaignSelection/CompaignCard';
import {ToastMessageLight} from '../../components/GlobalComponent/DisplayMessage';
import {hp, normalize, wp} from '../../theme/dimensions';
import {COLORS} from '../../theme/colors';
import {Montserrat} from '../../theme/fonts';
import {logo, plusicon} from '../../theme/images';
import routes from '../../constants/routes';
import useReduxStore from '../../hooks/useReduxStore';
import {
  getJoinedCampaign,
  setCurrentCampaign,
  setJoinedCampaign,
} from '../../redux/actions/campaings.actions';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import {useRoute} from '@react-navigation/native';

const CompaignSelection = ({navigation}) => {
  const {params} = useRoute();
  const {
    dispatch,
    user,
    allCampaign,
    currentCampaign,
    token,
    loading,
    setLoading,
  } = useReduxStore();
  const payload = {
    id: user?.id,
    role: user?.role,
  };

  useEffect(() => {
    getAllCampaign();
  }, [user]);

  const getAllCampaign = async () => {
    dispatch(
      getJoinedCampaign({
        payload,
        ToastMessageLight,
        setJoinedCampaign,
        token,
        setLoading,
      }),
    );
  };

  const navigateTo = item => {
    dispatch(setCurrentCampaign(item));
    navigation.navigate(routes.AuthNavigation);
  };

  const onPressJoinNewCampaign = () => {
    navigation.navigate(routes.OtpVerify, {type: 'campaign', data: user});
  };

  return (
    <SafeAreaView style={styles.container}>
      <CompaignHeader enableBackButton={params?.enableBackButton ?? false} />
      <ProfileView />
      <View style={styles.ongoingBox}>
        <Text style={styles.ongoingText}>Ongoing Campaigns</Text>
      </View>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView contentContainerStyle={styles.compaignBox}>
          {allCampaign?.map(item => (
            <CompaignCard
              key={item.campaignId}
              name={item.campaignName}
              status={currentCampaign?.campaignId === item.campaignId}
              onPress={() => navigateTo(item)}
            />
          ))}
        </ScrollView>
      )}
      <View style={styles.bottomBox}>
        <Text style={styles.joinText}>Join A New Campaign</Text>
        <TouchableOpacity
          onPress={onPressJoinNewCampaign}
          style={styles.plusBox}>
          <Image
            style={styles.plusIcon}
            source={plusicon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  ongoingBox: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    paddingBottom: hp(1.5),
    marginTop: hp(9),
    borderBottomColor: COLORS.lavendarWhiteDark,
  },
  ongoingText: {
    fontFamily: Montserrat,
    fontSize: normalize(16),
    color: COLORS.lavendarWhiteDark,
  },
  compaignBox: {
    alignItems: 'center',
    marginTop: hp(5),
  },
  bottomBox: {
    marginTop: hp(8),
    alignItems: 'center',
  },
  joinText: {
    fontFamily: Montserrat,
    fontSize: normalize(16),
    color: COLORS.lavendarWhiteDark,
  },
  plusBox: {
    backgroundColor: COLORS.orangeReddish,
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(10) / 2,
    marginTop: hp(4),
  },
  plusIcon: {
    width: wp(5.5),
    height: wp(5.5),
    tintColor: COLORS.white,
  },
  logo: {
    width: wp(19),
    height: hp(6),
    marginTop: hp(10),
  },
});

export default CompaignSelection;
