import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import VoterCheckHeader from '../../../components/PhoneBanking/VoterCheck/VoterCheckHeader';
import {MontserratBold, hp, normalize, wp} from '../../../../utils/Constants';
import VoterTags from '../../../components/PhoneBanking/VoterCheck/VoterTags';
import VoterInfo from '../../../components/PhoneBanking/VoterCheck/VoterInfo';
import VoterDescription from '../../../components/PhoneBanking/VoterCheck/VoterDescription';
import SelectionButton from '../../../components/PhoneBanking/VoterCheck/SelectionButton';
import VoterSurvey from '../../../components/PhoneBanking/VoterCheck/VoterSurvey';
import useVoterCheck from '../../../hooks/useVoterCheck';
import {ToastMessageDark} from '../../../components/GlobalComponent/DisplayMessage';
import LoadingScreen from '../../../components/GlobalComponent/LoadingScreen';

const VoterCheck = ({route, navigation}) => {
  const item = route.params?.item ? route.params.item : null;
  const {
    list,
    current,
    setCurrent,
    tags,
    customTags,
    adminTags,
    surveyList,
    script,
    loading,
  } = useVoterCheck(item, navigation);
  const [selected, setSelected] = useState('');

  const onNextPress = () => {
    if (current == 0) {
      navigation.goBack();
      ToastMessageDark('List Finished');
    } else {
      setCurrent(current - 1);
      setSelected('');
    }
  };

  if (list.length == 0 || loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <VoterCheckHeader
        name={`${list[current].FIRSTNAME} ${list[current].LASTNAME}`}
      />
      {selected == 'survey' ? (
        <VoterSurvey data={surveyList} />
      ) : (
        <>
          <View style={styles.voterinfo}>
            <Text style={styles.lastcontact}>
              Last Contacted 3/21/2021 - 3PM
            </Text>
            <VoterTags />
            <VoterInfo data={list[current]} />
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
