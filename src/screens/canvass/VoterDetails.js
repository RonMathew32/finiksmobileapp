import React, { useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import VoterActions from '../../components/PhoneBanking/VoterCheck/VoterActions';
import useReduxStore from '../../hooks/useReduxStore';
import VoterTags from '../../components/PhoneBanking/VoterCheck/VoterTags';
import VoterInfo from '../../components/PhoneBanking/VoterCheck/VoterInfo';
import { formattedDate } from '../../utils/FormatedDate';
import { hp, normalize, wp } from '../../theme/dimensions';
import { COLORS } from '../../theme/colors';
import { MontserratBold } from '../../theme/fonts';
import Accordian from '../../components/Accordian';
import IssueProfileTags from '../../components/IssueProfileTags';
import VoterProfileForm from '../../components/Profile/VoterProfileForm';
import CanvassVoterInfo from '../../components/CanvassVoterInfo';
import AppButton from '../../components/AppButton';

const VoterDetails = ({ navigation }) => {
  const { currentVoter, votersTag, campaignTags, customTags } = useReduxStore();

  const lastContacted = useMemo(() => formattedDate(currentVoter), [currentVoter]);

  const renderVoterTags = useCallback(() => (
    <View style={{ paddingHorizontal: wp(3) }}>
      <VoterTags
        campaignTags={campaignTags}
        customTags={customTags}
        votersTag={votersTag}
      />
    </View>
  ), [campaignTags, customTags, votersTag]);

  return (
    <View style={styles.container}>
      <VoterHeader
        title="Test"
        onPressLeft={() => console.log('Left')}
        enableBack={true}
      />
      <VoterActions
        navigation={navigation}
        currentVoter={currentVoter}
        canvass={true}
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.lastcontact}>
          Last Contacted {lastContacted}
        </Text>
        <VoterInfo currentVoter={currentVoter} canvass={true} />
        {renderVoterTags()}
        <View style={{ marginVertical: hp(5) }}>
          <Accordian title="Issue Profile Info">
            <IssueProfileTags />
          </Accordian>
          <Accordian title="Contact Info">
            <VoterProfileForm
              style={{ marginTop: hp(0) }}
              canvass={true}
              isContactInfo={true}
            />
          </Accordian>
          <Accordian title="Voter Info">
            <CanvassVoterInfo />
          </Accordian>
          <Accordian title="Survey">
            <AppButton title="Survey" />
          </Accordian>
        </View>
      </ScrollView>
    </View>
  );
};

export default VoterDetails;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  lastcontact: {
    fontFamily: MontserratBold,
    fontSize: normalize(12),
    color: COLORS.primary,
    marginTop: hp(2),
    paddingHorizontal: wp(3),
  },
});
