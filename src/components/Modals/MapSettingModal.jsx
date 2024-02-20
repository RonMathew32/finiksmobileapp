import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {hp, normalize, wp} from '../../theme/dimensions';
import {COLORS} from '../../theme/colors';
import VoterHeader from '../Headers/VoterHeader';
import {Montserrat} from '../../theme/fonts';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylee from '../../constants/stylee';

const MapSettingModal = ({visible, setVisible}) => {
  const options = useMemo(
    () => [
      {_id: 1, name: 'Standard', status: true},
      {_id: 2, name: 'Satalite', status: false},
      {_id: 3, name: 'Hybrid', status: false},
    ],
    [],
  );

  const renderOption = useMemo(
    () =>
      options.map(item => (
        <View key={item?._id} style={[styles.align, stylee.alignJSR]}>
          <Text style={styles.optionTxt}>{item?.name}</Text>
          <View
            style={[
              styles.dot,
              stylee.shadowWithOpactiy,
              item?.status && {
                backgroundColor: COLORS.green,
              },
            ]}></View>
        </View>
      )),
    [options],
  );

  const renderStatus = name => {
    return (
      <View
        style={[styles.alignFlex, stylee.alignR,  name == 'Completed' ? styles.status : {}]}>
        <HomeIcon
          name="home"
          color={name == 'Completed' ? COLORS.darkGray : COLORS.primary}
          size={hp(4)}
        />
        <Text style={styles.compTxt}>{name}</Text>
      </View>
    );
  };

  return (
    <ReactNativeModal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      style={styles.modalStyle}>
      <View style={styles.container}>
        <VoterHeader
          leftTitle="Close"
          leftTitleStyle={styles.headerSideTxt}
          onPressLeft={()=>setVisible(false)}
          rightTitle="Update"
          rightTitleStyle={[styles.headerSideTxt, {marginRight: 10}]}
          title="Map Settings"
          titleStyle={{fontFamily: Montserrat}}
        />
        {renderOption}
        {renderStatus('Completed')}
        {renderStatus('In Progress')}
      </View>
    </ReactNativeModal>
  );
};

export default React.memo(MapSettingModal);

const styles = StyleSheet.create({
  status: {
    marginTop: hp(3),
  },
  compTxt: {
    marginLeft: wp(3),
    fontSize: normalize(14),
  },
  alignFlex: {
    marginHorizontal: wp(5),
    marginBottom: hp(2),
  },
  align: {
    paddingVertical: hp(1.5),
    marginHorizontal: wp(5),
    borderBottomColor: COLORS.lavendarWhite,
    borderBottomWidth: 0.5,
  },
  optionTxt: {
    fontSize: normalize(16),
  },
  dot: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(3) / 2,
    backgroundColor: COLORS.lavendarWhiteDim,
  },
  headerSideTxt: {fontSize: normalize(14)},
  modalStyle: {
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: COLORS.white,
    height: hp(80),
    paddingBottom: hp(5),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
