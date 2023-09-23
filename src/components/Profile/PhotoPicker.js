import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MontserratBold, hp, normalize, wp} from '../../../utils/Constants';

const PhotoPicker = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageback}>
        <Text style={styles.nametxt}>AC</Text>
      </View>
      <View style={styles.selectionbox}>
        <TouchableOpacity>
          <Text>Upload Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Take Picture</Text>
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
