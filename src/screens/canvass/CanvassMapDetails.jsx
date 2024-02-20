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
import { canvassMapDetailsButtons, totalVotersData, script } from '../../constants/dummy';

const CanvassMapDetails = ({navigation}) => {
  const {params} = useRoute();
  const [selected, setSelected] = useState('');
  const [nextVoterloader, setNextVoterloader] = useState(false);

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
          buttons={canvassMapDetailsButtons}
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
