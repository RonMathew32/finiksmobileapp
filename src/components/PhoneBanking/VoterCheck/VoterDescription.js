import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  MontserratSemiBold,
  hp,
  normalize,
  wp,
} from '../../../../utils/Constants';

const VoterDescription = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Hello, is Frodo available? Hi, my name’s John and I’m with the
            Hannah Jacobs for Congress campaign. I am just calling to let you
            know about the election coming up on July 18th. It's going to be
            extremely important that we all get out and vote. Do you have a few
            minutes for me to ask you a couple questions?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VoterDescription;

const styles = StyleSheet.create({
  parent: {
    overflow: 'hidden',
    paddingBottom: 4,
    paddingTop: 4,
    marginTop: hp(2.5),
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'rgba(217, 217, 217, .24)',

    shadowColor: '#545454',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
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
