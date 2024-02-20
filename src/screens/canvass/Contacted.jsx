import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../theme/colors';
import VoterHeader from '../../components/Headers/VoterHeader';
import { hp, wp } from '../../theme/dimensions';
import CampaignCard from '../../components/CampaignCard';
import AppButton from '../../components/GlobalComponent/AppButton';
import stylee from '../../constants/stylee';
import { contactedData } from '../../constants/dummy';

const Contacted = () => {
  return (
    <View style={stylee.container}>
      <VoterHeader leftTitle="Cancel" rightTitle="Save" title="Contact Page" />
      <View style={styles.context}>
        <Text style={styles.heading}>How Did You Contact (Insert Name Here)</Text>
        <Text style={styles.selectTxt}>Select Below:</Text>
        {contactedData?.map(item => (
          <CampaignCard
            name={item.title}
            desc={item.desc}
            index={item?._id}
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
