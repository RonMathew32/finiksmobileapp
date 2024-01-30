import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {hp, normalize, wp} from '../../../theme/dimensions';
import {MontserratSemiBold} from '../../../theme/fonts';

const VoterDescription = ({script}) => {

  const scriptDesc = useMemo(() => (script ? script : ''),[script]);

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.text}>{scriptDesc}</Text>
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
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#D9D9D9',
    shadowColor: '#545454',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    height: hp(25),
    padding: 5,
  },
  text: {
    marginHorizontal: wp(4),
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    lineHeight: normalize(18),
    color: '#140001',
    marginVertical: hp(2),
  },
});
