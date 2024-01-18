import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import VoterCheckHeader from '../../components/PhoneBanking/VoterCheck/VoterCheckHeader';
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
import { setCurrentVoter, setVotersTag } from '../../redux/actions/voters.actions';

const VoterCheck = ({route, navigation}) => {
  const item = route.params?.item ? route.params.item : null;
  const {dispatch} = useReduxStore()
  const {
    undoneVoters,
    votersTag,
    campaignTags,
    customTags,
    survey,
    script,
    loading,
    currentVoter,
    campaignOwnerID,
  } = useVoterCheck(item, navigation);
  const [selected, setSelected] = useState('');

  console.log(undoneVoters);

  const onNextPress = () => {
    if (currentVoter == 0) {
      // navigation.goBack();
      ToastMessageDark('List Finished');
    } else {
      dispatch(setCurrentVoter(current - 1));
      setSelected('');
    }
  };

  if (undoneVoters?.length == 0 || loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <VoterCheckHeader
        name={`${undoneVoters[current]?.FIRSTNAME} ${undoneVoters[current]?.LASTNAME}`}
      /> */}
      {selected == 'survey' ? (
        <VoterSurvey data={survey} />
      ) : (
        <>
          <View style={styles.voterinfo}>
            <Text style={styles.lastcontact}>
              Last Contacted 3/21/2021 - 3PM
            </Text>
            <VoterTags
              tags={votersTag}
              setTags={(tag)=> dispatch(setVotersTag(tag))}
              customTags={campaignTags}
              adminTags={customTags}
            />
            {/* <VoterInfo data={undoneVoters[current]} /> */}
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
    // flex: 1,
    backgroundColor: 'white',
  },
  voterinfo: {
    marginHorizontal: wp(4),
  },
  lastcontact: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    color: '#545454',
    marginTop: hp(2),
  },
});
