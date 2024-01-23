import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratBold} from '../../theme/fonts';
import { COLORS } from '../../theme/colors';

const PhotoPicker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageback}>
        <Text style={styles.nametxt}>AC</Text>
      </View>
      <View style={styles.selectionbox}>
        <TouchableOpacity>
          <Text style={styles.txt}>Upload Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txt}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoPicker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: hp(3),
  },
  txt: {
    color: COLORS.lavendarWhiteDark
  },
  imageback: {
    width: wp(25),
    height: wp(25),
    backgroundColor: '#FF914D',
    borderRadius: wp(25) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nametxt: {
    fontFamily: MontserratBold,
    fontSize: normalize(30),
    color: 'white',
  },
  selectionbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: hp(2),
  },
});
