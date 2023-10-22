import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {chevronleft} from '../../../utils/images';
import {
  MontserratMedium,
  MontserratSemiBold,
  hp,
  normalize,
  wp,
} from '../../../utils/Constants';
import {useNavigation} from '@react-navigation/native';

const VoterInfoHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={{overflow: 'hidden', paddingBottom: 4}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.savebox}
          onPress={() => navigation.canGoBack() && navigation.goBack()}>
          <Image
            source={chevronleft}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.nametxt}>Update Voter Info</Text>
        <TouchableOpacity
          style={styles.savebox}
          onPress={() => console.log('save')}>
          <Text style={styles.savetxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoterInfoHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),

    backgroundColor: 'white',

    shadowColor: '#545454',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    paddingBottom: hp(1.5),
  },
  icon: {
    width: wp(6.5),
    height: wp(6.5),
    tintColor: '#D12E2F',
  },
  nametxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: '#545454',
  },
  savebox: {
    width: wp(12),
    alignItems: 'flex-start',
    // borderWidth: 1,
  },
  savetxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(15),
    color: '#D12E2F',
  },
});
