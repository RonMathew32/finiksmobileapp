import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratBold} from '../../theme/fonts';
import VoterTags from '../../components/PhoneBanking/VoterCheck/VoterTags';
import VoterInfo from '../../components/PhoneBanking/VoterCheck/VoterInfo';
import VoterDescription from '../../components/PhoneBanking/VoterCheck/VoterDescription';
import SelectionButton from '../../components/PhoneBanking/VoterCheck/SelectionButton';
import VoterSurvey from '../../components/PhoneBanking/VoterCheck/VoterSurvey';
import useVoterCheck from '../../hooks/useVoterCheck';
import {ToastMessageDark} from '../../components/GlobalComponent/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import useReduxStore from '../../hooks/useReduxStore';
import {
  setCurrentVoter,
  setVotersTag,
} from '../../redux/actions/voters.actions';
import VoterActions from '../../components/PhoneBanking/VoterCheck/VoterActions';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import {COLORS} from '../../theme/colors';

const VoterCheck = ({route, navigation}) => {
  const item = route.params?.item ? route.params.item : null;
  const {dispatch} = useReduxStore();
  const {votersTag, survey, currentVoter, campaignTags, customTags} =
    useReduxStore(item);
  const {loading} = useVoterCheck(item);
  const [selected, setSelected] = useState('');
  const inputDate = currentVoter?.lastInfluenced
    ? new Date(currentVoter?.lastInfluenced)
    : new Date();

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    inputDate,
  );

  const onNextPress = () => {
    if (currentVoter == 0) {
      // navigation.goBack();
      ToastMessageDark('List Finished');
    } else {
      dispatch(setCurrentVoter(current - 1));
      setSelected('');
    }
  };

  return loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={styles.container}>
      <VoterHeader
        title={`${currentVoter?.FIRSTNAME} ${currentVoter?.LASTNAME}`}
        leftTitle="Done"
      />
      <VoterActions currentVoter={currentVoter} navigation={navigation} />
      {selected == 'survey' ? (
        <VoterSurvey tags={votersTag} data={survey} />
      ) : (
        <>
          <View style={styles.voterinfo}>
            <Text style={styles.lastcontact}>
              Last Contacted {formattedDate}
            </Text>
            <VoterTags
              campaignTags={campaignTags}
              customTags={customTags}
              votersTag={votersTag}
            />
            <VoterInfo currentVoter={currentVoter} />
          </View>
          <VoterDescription />
        </>
      )}

      <View style={styles.voterinfo}>
        <SelectionButton
          onNextPress={onNextPress}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
    </SafeAreaView>
  );
};

export default VoterCheck;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  voterinfo: {
    marginHorizontal: wp(4),
  },
  lastcontact: {
    fontFamily: MontserratBold,
    fontSize: normalize(12),
    color: COLORS.darkGray,
    marginTop: hp(2),
  },
});
