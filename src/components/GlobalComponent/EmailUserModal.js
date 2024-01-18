import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {crossicon, messageicon, tick} from '../../theme/images';
import {
  Montserrat,
  MontserratBold,
  MontserratExtraBold,
  MontserratMedium,
  MontserratSemiBold,

} from '../../theme/fonts';
import {  hp,
  normalize,
  wp } from '../../theme/dimensions';

const EmailUserModal = ({visible, setVisible, votter, type}) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      style={styles.modalStyle}
      onBackdropPress={() => setVisible(false)}>
      <View style={styles.container}>
        <View style={styles.headerbox}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={crossicon}
                style={styles.crossicon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={styles.headertxt}>Choose A Message</Text>
            <View style={styles.crossicon} />
          </View>
        </View>
        <View style={styles.typeview}>
          <Text style={styles.typetxt}>{type}</Text>
        </View>
        <ScrollView style={styles.selectionbox}>
          <SelectioCard name="GOTV" />
          <SelectioCard name="Absentee Signup" />
          <SelectioCard name="Interested Canvasser" />
        </ScrollView>
        <View style={styles.messagebox}>
          <Text style={styles.messagehead}>Message:</Text>
          <Text style={styles.messagetxt}>Hi frodo this is your message</Text>
        </View>
        <View style={styles.btnbox}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Use This Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secbtn}>
            <Text style={styles.headertxt}>Start with Blank Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
};

const SelectioCard = ({name, index}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardleft}>
        <Image
          source={messageicon}
          style={styles.messageicon}
          resizeMode="contain"
        />
        <Text style={styles.cardtxt}>{name}</Text>
      </View>
      <Image source={tick} style={styles.tickicon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default EmailUserModal;

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingBottom: hp(5),
  },
  headerbox: {overflow: 'hidden', paddingBottom: 4},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    backgroundColor: 'white',
    paddingVertical: hp(2),

    shadowColor: '#545454',
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
    color: '#545454',
  },
  typeview: {
    borderBottomWidth: 1,
    borderBottomColor: '#D12E2F',
    width: wp(60),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
  typetxt: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    lineHeight: normalize(19),
    color: '#D12E2F',
    marginBottom: hp(1),
  },
  selectionbox: {
    height: hp(40),
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A6',
    marginTop: hp(1),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A6',
    paddingVertical: hp(1),
  },
  cardleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageicon: {
    width: wp(7),
    height: wp(7),
    tintColor: '#D12E2F',
  },
  cardtxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: '#545454',
    marginLeft: wp(3),
  },
  tickicon: {
    width: wp(6),
    height: wp(6),
    tintColor: '#D12E2F',
  },
  messagebox: {
    marginHorizontal: wp(4),
    marginTop: hp(1.5),
    height: hp(20),
  },
  messagehead: {
    fontFamily: MontserratMedium,
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: '#D12E2F',
  },
  messagetxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: '#545454',
    marginTop: hp(1),
  },
  btnbox: {
    marginHorizontal: wp(4),
  },
  btn: {
    width: '100%',
    height: hp(5),
    backgroundColor: '#D12E2F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
  },
  btntxt: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: 'white',
  },
  secbtn: {
    width: '100%',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
});
