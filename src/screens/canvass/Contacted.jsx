import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../theme/colors';
import VoterHeader from '../../components/Headers/VoterHeader';
import { hp, wp } from '../../theme/dimensions';
import CampaignCard from '../../components/CampaignCard';
import AppButton from '../../components/GlobalComponent/AppButton';
import stylee from '../../constants/stylee';

const contactedData = [
  { id: 1, title: 'In Person', desc: 'Spoke with (Insert Name) in person' },
  { id: 2, title: 'By Phone', desc: 'Spoke with (Insert Name) by phone call' },
  { id: 3, title: 'By Text', desc: 'Spoke with (Insert Name) by text message' },
  { id: 4, title: 'By Email', desc: 'Spoke with (Insert Name) by email' },
  { id: 5, title: 'While Canvassing', desc: 'Spoke with (Insert Name) while canvassing' },
  { id: 6, title: 'Over Social Media', desc: 'Spoke with (Insert Name) over social media' },
];

const Contacted = () => {
  return (
    <View style={stylee.container}>
      <VoterHeader leftTitle="Cancel" rightTitle="Save" title="Contact Page" />
      <View style={styles.context}>
        <Text style={styles.heading}>How Did You Contact (Insert Name Here)</Text>
        <Text style={styles.selectTxt}>Select Below:</Text>
        {contactedData.map(item => (
          <CampaignCard
            key={item.id}
            name={item.title}
            desc={item.desc}
            status={true}
            style={styles.card}
          />
        ))}
        <AppButton title="Save Answer" style={styles.btn} />
      </View>
    </View>
  );
};

export default Contacted;

const styles = StyleSheet.create({
  context: {
    padding: wp(5),
  },
  heading: {
    color: COLORS.primary,
  },
  selectTxt: {
    marginTop: hp(5),
    marginBottom: hp(3),
    color: COLORS.darkGray,
  },
  card: {
    borderRadius: 4,
    width: wp(90),
    height: hp(8),
    paddingBottom: hp(1),
  },
  btn: {
    width: wp(80),
    borderRadius: 5,
    marginTop: hp(5),
  },
});
