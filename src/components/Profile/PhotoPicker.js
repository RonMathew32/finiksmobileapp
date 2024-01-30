import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratBold} from '../../theme/fonts';
import {COLORS} from '../../theme/colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PhotoPicker = ({user, setImage}) => {
  const [userImage, setUserImage] = useState('')
  const name = user?.firstName
    ? `${user?.firstName?.trim()[0]} ${user?.lastName?.trim()[0]}`
    : '';
  const options = {
    includeBase64: true,
    mediaType: 'photo',
  };

  useEffect(()=> {
    setUserImage(user?.campaignLogo)
  },[])

  const handleImagePicker = async callback => {
    try {
      const result = await callback(options);
      if (result && result.assets[0]) {
        const img = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
        setImage(img);
        setUserImage(result?.assets[0]?.uri)
      }
    } catch (error) {
      console.log(error, 'Error');
    }
  };

  const fromCamera = () => handleImagePicker(launchCamera);
  const fromGallery = () => handleImagePicker(launchImageLibrary);

  return (
    <View style={styles.container}>
      <View style={styles.imageBack}>
        {(userImage) ? (
          <Image source={{uri: userImage}} style={styles.imgStyle} resizeMode="contain" />
        ) : (
          <Text style={styles.nameText}>{name}</Text>
        )}
      </View>
      <View style={styles.selectionBox}>
        <TouchableOpacity style={styles.btn} onPress={fromGallery}>
          <Text style={styles.text}>Upload Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={fromCamera}>
          <Text style={styles.text}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoPicker;

const styles = StyleSheet.create({
  imgStyle: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(25) / 2,
  },
  btn: {
    width: 'auto',
    padding: 10,
    backgroundColor: COLORS.orangeReddish,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    marginTop: hp(3),
  },
  text: {
    color: COLORS.white,
  },
  imageBack: {
    width: wp(25),
    height: wp(25),
    backgroundColor: '#FF914D',
    borderRadius: wp(25) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontFamily: MontserratBold,
    fontSize: normalize(30),
    color: 'white',
  },
  selectionBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: hp(2),
  },
});
