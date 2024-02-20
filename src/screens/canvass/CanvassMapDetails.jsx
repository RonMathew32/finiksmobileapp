import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../theme/colors';
import CampaignHeader from '../../components/Headers/CampaignHeader';
import {useRoute} from '@react-navigation/native';
import {hp, normalize, wp} from '../../theme/dimensions';
import VoterDescription from '../../components/VoterDescription';
import SingleVoter from '../../components/SingleVoter';
import SelectionButton from '../../components/SelectionButton';
import routes from '../../constants/routes';
import stylee from '../../constants/stylee';

const CanvassMapDetails = ({navigation}) => {
  const {params} = useRoute();
  const [selected, setSelected] = useState('');
  const [nextVoterloader, setNextVoterloader] = useState(false);
  const script = `"Hi! my name _____ and I am here on befalf of Hanna Jacobs for Congress, Are you available for breif coversation?"`;
  const totalVotersData = [
    {
      _id: 1,
      name: 'Ailbo Baggins',
      sex: 'F',
      age: 102,
      partyCode: 'Independent',
    },
    {
      _id: 2,
      name: 'Zilbo Baggins',
      sex: 'F',
      age: 45,
      partyCode: 'Republican',
    },
    {
      _id: 3,
      name: 'Bilbo Baggins',
      sex: 'F',
      age: 32,
      partyCode: 'Republican',
    },
    {
      _id: 4,
      name: 'Samwise Gamgee',
      sex: 'M',
      age: 42,
      partyCode: 'Republican',
    },
  ];

  const buttons = [
    {name: 'Refused', type: 'wrong'},
    {name: 'Restriced Access', type: 'donot'},
    {name: 'No one home', type: 'contact'},
    {name: 'Literature Drop', type: 'survey'},
  ];

  const handleButtonPress = type => {
    setSelected(prev => (prev === type ? null : type));
  };

  return (
    <SafeAreaView style={stylee.container}>
      <CampaignHeader
        enableBackButton={true}
        title={params?.item?.address}
        textStyle={styles.headerTxt}
      />
      <VoterDescription
        script={script}
        style={styles.desc}
        textStyle={styles.descTxt}
      />
      <FlatList
        data={totalVotersData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <SingleVoter item={item} onPressVoter={()=> navigation.navigate(routes?.VoterDetails)}/>}
      />
      <View style={styles.voterinfo}>
        <SelectionButton
          onNextPress={()=>navigation.goBack()}
          buttons={buttons}
          selected={selected}
          handleButtonPress={handleButtonPress}
          setSelected={setSelected}
          nextVoterLoader={nextVoterloader}
          mainBtnTxt='Finish'
        />
      </View>
    </SafeAreaView>
  );
};

export default CanvassMapDetails;

const styles = StyleSheet.create({
  voterinfo: {
    marginHorizontal: wp(4),
    marginBottom: hp(3)
  },
  descTxt: {
    fontSize: normalize(22),
    textAlign: 'center',
    lineHeight: hp(4),
  },
  desc: {
    marginTop: hp(0),
  },
  headerTxt: {
    fontSize: normalize(12),
  },
});
