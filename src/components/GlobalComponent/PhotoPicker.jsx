import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { hp, normalize, wp } from '../../theme/dimensions';
import { MontserratBold } from '../../theme/fonts';
import { COLORS } from '../../theme/colors';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import stylee from '../../constants/stylee';

const PhotoPicker = ({ user, setImage }) => {
  const [userImage, setUserImage] = useState('');

  const nameInitials = useCallback(() => {
    const firstNameInitial = user?.firstName?.trim()[0];
    const lastNameInitial = user?.lastName?.trim()[0];
    return `${firstNameInitial} ${lastNameInitial}`;
  }, [user]);

  const options = {
    includeBase64: true,
    mediaType: 'photo',
  };

  useEffect(() => {
    setUserImage(user?.campaignLogo || '');
  }, [user]);

  const handleImagePicker = async (callback) => {
    try {
      const result = await callback(options);
      if (result && result.assets[0]) {
        const img = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
        setImage(img);
        setUserImage(result?.assets[0]?.uri);
      }
    } catch (error) {
      console.log(error, 'Error');
    }
  };

  const fromCamera = useCallback(() => handleImagePicker(launchCamera), []);
  const fromGallery = useCallback(() => handleImagePicker(launchImageLibrary), []);

  return (
    <View style={styles.container}>
      <View style={[styles.imageBack, stylee.alignJC]}>
        {userImage ? (
          <Image source={{ uri: userImage }} style={styles.imgStyle} resizeMode="contain" />
        ) : (
          <Text style={styles.nameText}>{nameInitials()}</Text>
        )}
      </View>
      {/* <View style={[styles.selectionBox, stylee.flexJS]}>
        <TouchableOpacity style={[styles.btn, stylee.alignJC]} onPress={fromGallery}>
          <Text style={styles.text}>Upload Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={fromCamera}>
          <Text style={styles.text}>Take Picture</Text>
        </TouchableOpacity>
      </View> */}
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
    backgroundColor: COLORS.primary,
    borderRadius: 20,
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
    backgroundColor: COLORS.primary,
    borderRadius: wp(25) / 2,
  },
  nameText: {
    fontFamily: MontserratBold,
    fontSize: normalize(30),
    color: COLORS.white,
  },
  selectionBox: {
    width: '60%',
    marginTop: hp(2),
  },
});
