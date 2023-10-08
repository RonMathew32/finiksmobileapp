import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {
  addusericon,
  dotsicon,
  emailicon,
  homeicon,
  messageicon,
  phoneicon,
} from '../../../../utils/images';
import {
  MontserratBold,
  MontserratExtraBold,
  MontserratMedium,
  hp,
  normalize,
  wp,
} from '../../../../utils/Constants';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const VoterCheckHeader = ({name}) => {
  const navigation = useNavigation();
  const OnCardPress = () => {};
  return (
    <View style={{overflow: 'hidden', paddingBottom: 4}}>
      <View style={styles.shadow}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <Text style={styles.done}>Done</Text>
          </TouchableOpacity>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TotalVoters')}>
            <Image source={homeicon} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomheader}>
          <Card
            icon={messageicon}
            name="Message"
            onPress={() => OnCardPress('Message')}
            iconstyle={styles.images}
          />
          <Card
            icon={phoneicon}
            name="Call"
            onPress={() => OnCardPress('Call')}
            iconstyle={styles.phoneicon}
          />
          <Card
            icon={addusericon}
            name="Add To Team"
            onPress={() => OnCardPress('Add To Team')}
            iconstyle={styles.addusericon}
          />
          <Card
            icon={emailicon}
            name="Email"
            onPress={() => OnCardPress('Email')}
            iconstyle={styles.emailicon}
          />
          <Card
            icon={dotsicon}
            name="Update"
            onPress={() => OnCardPress('Update')}
            iconstyle={styles.dotsicon}
          />
        </View>
      </View>
    </View>
  );
};

const Card = ({icon, name, onPress, iconstyle}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={icon}
        style={[styles.images, iconstyle]}
        resizeMode="contain"
      />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default VoterCheckHeader;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',

    shadowColor: '#545454',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  done: {
    fontFamily: MontserratMedium,
    fontSize: normalize(15),
    color: '#D12E2F',
  },
  name: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(20),
    color: '#545454',
  },
  icon: {
    width: wp(7),
    height: wp(7),
    tintColor: '#D12E2F',
  },
  bottomheader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(1.7),
    marginBottom: hp(1.6),
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: wp(7),
    height: wp(7),
    tintColor: '#D12E2F',
  },
  title: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    letterSpacing: 0,
    color: '#D12E2F',
    marginTop: hp(0.3),
  },
  phoneicon: {
    width: wp(7),
    height: wp(7),
  },
  addusericon: {
    width: wp(8),
    height: wp(8),
  },
  emailicon: {
    width: wp(8),
    height: wp(8),
  },
  dotsicon: {
    width: wp(10),
    height: wp(10),
  },
});
