import React, { useState, useMemo } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { crossicon } from '../../theme/images';
import {
  Montserrat,
  MontserratBold,
  MontserratMedium,
  MontserratSemiBold,
  MontserratExtraBold
} from '../../theme/fonts';
import { hp, normalize, wp } from '../../theme/dimensions';
import InputText from '../GlobalComponent/InputText';
import { openMessageApp, sendEmail } from '../../utils/CommunicationUtils';
import { COLORS } from '../../theme/colors';

const EmailUserModal = ({ visible, setVisible, voter, type }) => {
  const [message, setMessage] = useState(`Hi ${voter?.FIRSTNAME} ${voter?.LASTNAME}`);
  const [emailSubject, setEmailSubject] = useState('')
  const phoneNumber = voter?.MOBILE_NUM
  const emailAddress = voter?.EMAIL || voter?.EMAIL2 || voter?.EMAIL3

  const startAction = () => {
    if (type === 'Email') {
      sendEmail(emailAddress, emailSubject, message);
    } else if (type === 'Message') {
      openMessageApp(phoneNumber, message);
    }
    cleanUp();
  };

  const cleanUp = () => {
    setMessage(`Hi ${voter?.FIRSTNAME} ${voter?.LASTNAME}`);
    setEmailSubject('');
    setVisible(false)
  };

  return useMemo(() => (
    <ReactNativeModal
      isVisible={visible}
      style={styles.modalStyle}
      onBackdropPress={cleanUp}
    >
      <View style={styles.container}>
        <View style={styles.headerbox}>
          <View style={styles.header}>
          <View style={styles.crossicon} />
            <Text style={styles.headertxt}>Choose A Message</Text>
            <TouchableOpacity onPress={cleanUp}>
              <Image
                source={crossicon}
                style={styles.crossicon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.typeview}>
          <Text style={styles.typetxt}>{type}</Text>
        </View>
        {type == 'Email'? <View style={{paddingHorizontal: wp(3)}}>
          <Text style={[styles.messagehead, {marginVertical: hp(2)}]}>Subject:</Text>
          <InputText
            placeholder='Write a subject'
            value={emailSubject}
            onChangeText={setEmailSubject}
            textinputstyle={{height: hp(3)}}
            containerstyle={{paddingHorizontal: wp(0)}}
            
          />
        </View> : null}
        <View style={styles.messagebox}>
          <Text style={[styles.messagehead, {marginVertical: hp(2)}]}>Message:</Text>
          <InputText
            value={message}
            onChangeText={setMessage}
            multiline={true}
            textinputstyle={styles.txtMessage}
            containerstyle={{paddingHorizontal: wp(0)}}
            
          />
        </View>
        <View style={styles.btnbox}>
          <TouchableOpacity style={styles.btn} onPress={startAction}>
            <Text style={styles.btntxt}>Use This Message</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.secbtn}>
            <Text style={styles.headertxt}>Start with Blank Message</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ReactNativeModal>
  ), [visible, voter, setVisible, type, message, emailSubject]);
};

export default React.memo(EmailUserModal);

const styles = StyleSheet.create({
  txtMessage: {height: hp(7), position: 'absolute', top: -5},
  modalStyle: {
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: COLORS.white,
    paddingBottom: hp(5),
    borderColor: COLORS.lavendarWhite,
    borderTopWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  headerbox: {overflow: 'hidden', paddingBottom: 4},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    backgroundColor: COLORS.white,
    paddingVertical: hp(2),

    shadowColor: COLORS.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  crossicon: {
    width: wp(5),
    height: wp(5),
  },
  headertxt: {
    fontFamily: Montserrat,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    color: COLORS.darkGray,
  },
  typeview: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    width: wp(60),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
  typetxt: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    lineHeight: normalize(19),
    color: COLORS.primary,
    marginBottom: hp(1),
  },
  selectionbox: {
    height: hp(40),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lavendarWhiteDark,
    marginTop: hp(1),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lavendarWhiteDark,
    paddingVertical: hp(1),
  },
  cardleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageicon: {
    width: wp(7),
    height: wp(7),
    tintColor: COLORS.primary,
  },
  cardtxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: COLORS.darkGray,
    marginLeft: wp(3),
  },
  tickicon: {
    width: wp(6),
    height: wp(6),
    tintColor: COLORS.primary,
  },
  messagebox: {
    marginHorizontal: wp(4),
    marginTop: hp(1.5),
    height: hp(16),
  },
  messagehead: {
    fontFamily: MontserratMedium,
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: COLORS.primary,
  },
  messagetxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: COLORS.darkGray,
    marginTop: hp(1),
  },
  btnbox: {
    marginHorizontal: wp(4),
  },
  btn: {
    width: '100%',
    height: hp(5),
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
  },
  btntxt: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: COLORS.hardCodeWhite,
  },
  secbtn: {
    width: '100%',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
});
