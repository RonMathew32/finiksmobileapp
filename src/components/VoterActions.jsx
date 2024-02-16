import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  addusericon,
  dotsicon,
  emailicon,
  messageicon,
  phoneicon,
} from '../theme/images';
import {hp, normalize, wp} from '../theme/dimensions';
import {
  MontserratMedium,
} from '../theme/fonts';
import EmailUserModal from './Modals/EmailUserModal';
import AddToTeamModal from './Modals/AddToTeamModal';
import routes from '../constants/routes';
import { COLORS } from '../theme/colors';
import { makePhoneCall } from '../utils/CommunicationUtils';

const VoterActions = ({navigation, currentVoter, canvass = false}) => {
  const [messageModal, setMessageModal] = useState(false);
  const [addToTeamModal, setAddToTeamModal] = useState(false);
  const [type, setType] = useState('Message');
  const isEmailExist = currentVoter?.EMAIL ?? currentVoter?.EMAIL2 ?? currentVoter?.EMAIL3 ?? '';
  const isPhoneNumberExist = currentVoter?.MOBILE_NUM ?? ''

  const OnEMCardPress = val => {
    setType(val);
    setMessageModal(true);
  };

  const OnCardPress = val => {
    if (val == 'Add To Team') {
      setAddToTeamModal(true);
    } else if (val === 'Call') {
      makePhoneCall(isPhoneNumberExist);
    } else if (val === 'Update') {
      navigation.navigate(routes?.UpdateVoterInfo);
    } else if (val === 'Contacted'){
      navigation.navigate(routes?.Contacted);
    }
  };

  return (
    <View style={{overflow: 'hidden', paddingBottom: 4}}>
      <View style={styles.shadow}>
        <View style={styles.bottomHeader}>
          <Card
            icon={messageicon}
            name="Message"
            valueExist={isPhoneNumberExist}
            onPress={() => OnEMCardPress('Message')}
            iconstyle={styles.images}
          />
          <Card
            icon={phoneicon}
            name="Call"
            valueExist={isPhoneNumberExist}
            onPress={() => OnCardPress('Call')}
            iconstyle={styles.phoneIcon}
          />
          <Card
            icon={addusericon}
            name="Add To Team"
            valueExist={isEmailExist}
            onPress={() => OnCardPress('Add To Team')}
            iconstyle={styles.addUserIcon}
          />
          <Card
            icon={emailicon}
            name="Email"
            valueExist={isEmailExist}
            onPress={() => OnEMCardPress('Email')}
            iconstyle={styles.emailIcon}
          />
          <Card
            icon={dotsicon}
            name={canvass? "Contacted" :  "Update"}
            valueExist={true}
            onPress={() => OnCardPress(canvass? "Contacted" :  "Update")}
            iconstyle={styles.dotsIcon}
          />
        </View>
      </View>
      <EmailUserModal
        visible={messageModal}
        setVisible={setMessageModal}
        voter={currentVoter}
        type={type}
      />
      <AddToTeamModal visible={addToTeamModal} setVisible={setAddToTeamModal} />
    </View>
  );
};

const Card = ({icon, name, onPress, iconstyle, valueExist}) => {
  return (
    <TouchableOpacity disabled={valueExist? false : true} style={styles.card} onPress={onPress}>
      <Image
        source={icon}
        style={[iconstyle, styles.images(valueExist)]}
        resizeMode="contain"
      />
      <Text style={styles.title(valueExist)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default VoterActions;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.darkGray,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    height: hp(6),
  },
  icon: {
    ...imageStyle(wp(7), wp(7), COLORS.primary),
  },
  bottomHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(1),
    marginBottom: hp(1.6),
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: (isValue) => ({
    ...imageStyle(wp(7), wp(7), isValue ? COLORS.primary : COLORS.lavendarWhite),
  }),
  title: (isValue) => ({
    ...textStyle(MontserratMedium, 12, isValue ? COLORS.primary : COLORS.lavendarWhite),
    marginTop: hp(0.3),
  }),
  phoneIcon: {
    ...imageStyle(wp(7), wp(7)),
  },
  addUserIcon: {
    ...imageStyle(wp(8), wp(8)),
  },
  emailIcon: {
    ...imageStyle(wp(8), wp(8)),
  },
  dotsIcon: {
    ...imageStyle(wp(10), wp(10)),
  },
});

// Helper functions
function textStyle(fontFamily, fontSize, color) {
  return {
    fontFamily: fontFamily,
    fontSize: normalize(fontSize),
    color: color,
  };
}

function imageStyle(width, height, tintColor) {
  return {
    width: width,
    height: height,
    tintColor: tintColor,
  };
}

