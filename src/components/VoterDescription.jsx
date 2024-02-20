import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {hp, normalize, wp} from '../theme/dimensions';
import {MontserratSemiBold} from '../theme/fonts';
import { COLORS } from '../theme/colors';
import stylee from '../constants/stylee';

const VoterDescription = ({script, style, textStyle}) => {

  const scriptDesc = useMemo(() => (script ? script : ''),[script]);

  return (
    <View style={[styles.parent, style]}>
      <View style={[styles.container, stylee.shadow]}>
        <ScrollView style={{flex: 1}}>
          <Text style={[styles.text, textStyle]}>{scriptDesc}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default React.memo(VoterDescription);

const styles = StyleSheet.create({
  parent: {
    overflow: 'hidden',
    paddingBottom: 4,
    paddingTop: 4,
    marginTop: hp(2.5),
    backgroundColor: COLORS.white,
  },
  container: {
    backgroundColor: COLORS.background,
    height: hp(25),
    padding: 5,
  },
  text: {
    marginHorizontal: wp(4),
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    lineHeight: normalize(18),
    color: COLORS.darkGray,
    marginVertical: hp(2),
  },
});
