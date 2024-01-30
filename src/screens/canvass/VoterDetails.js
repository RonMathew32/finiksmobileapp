import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import VoterActions from '../../components/PhoneBanking/VoterCheck/VoterActions';
import useReduxStore from '../../hooks/useReduxStore';
import VoterSurvey from '../../components/PhoneBanking/VoterCheck/VoterSurvey';
import VoterTags from '../../components/PhoneBanking/VoterCheck/VoterTags';
import VoterInfo from '../../components/PhoneBanking/VoterCheck/VoterInfo';
import { formattedDate } from '../../utils/FormatedDate';
import { hp, normalize, wp } from '../../theme/dimensions';
import { COLORS } from '../../theme/colors';
import { MontserratBold } from '../../theme/fonts';

const VoterDetails = ({navigation}) => {
  const {currentVoter, votersTag, campaignTags, customTags} = useReduxStore();
  return (
    <View>
      <VoterHeader title={'Frodo Baggins'} onPressLeft={true} />
      <VoterActions
        navigation={navigation}
        currentVoter={currentVoter}
        canvass={true}
      />
      <View style={styles.voterinfo}>
        <Text style={styles.lastcontact}>Last Contacted {formattedDate(currentVoter)}</Text>
        <VoterInfo currentVoter={currentVoter} canvass={true}/>
        <View style={{paddingHorizontal: wp(3)}}>
        <VoterTags
          campaignTags={campaignTags}
          customTags={customTags}
          votersTag={votersTag}
        />
        </View>
      </View>
    </View>
  );
};

export default VoterDetails;

const styles = StyleSheet.create({
  lastcontact: {
    fontFamily: MontserratBold,
    fontSize: normalize(12),
    color: COLORS.orangeReddish,
    marginTop: hp(2),
    paddingHorizontal: wp(3)
  },
});
