import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import VoterCheckHeader from '../../../components/PhoneBanking/VoterCheck/VoterCheckHeader';
import {MontserratBold, hp, normalize, wp} from '../../../../utils/Constants';
import VoterTags from '../../../components/PhoneBanking/VoterCheck/VoterTags';
import VoterInfo from '../../../components/PhoneBanking/VoterCheck/VoterInfo';
import VoterDescription from '../../../components/PhoneBanking/VoterCheck/VoterDescription';
import SelectionButton from '../../../components/PhoneBanking/VoterCheck/SelectionButton';
import VoterSurvey from '../../../components/PhoneBanking/VoterCheck/VoterSurvey';

const VoterCheck = () => {
  const [selected, setSelected] = useState('');

  const onNextPress = () => {
    setSelected('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <VoterCheckHeader name="Frodo Beggins" />
      {selected == 'survey' ? (
        <VoterSurvey />
      ) : (
        <>
          <View style={styles.voterinfo}>
            <Text style={styles.lastcontact}>
              Last Contacted 3/21/2021 - 3PM
            </Text>
            <VoterTags />
            <VoterInfo />
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
