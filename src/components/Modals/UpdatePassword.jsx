import React, {useCallback, useState, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../../theme/colors';
import {hp, normalize, wp} from '../../theme/dimensions';
import {CustomInput} from '../ProfileForm';
import AppButton from '../GlobalComponent/AppButton';

const UpdatePassword = ({
  isVisible,
  onClose,
  onSave,
  loading,
  errorMsg,
  setErrorMsg,
}) => {
  const [data, setData] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const onChangeValue = useCallback(
    (key, value) => {
      setData(prevData => ({...prevData, [key]: value}));
      setErrorMsg('');
    },
    [setErrorMsg],
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        errorTxt: {
          color: COLORS.red,
          marginTop: hp(3),
        },
        btnStyle: {
          width: wp(35),
          height: hp(5),
          borderRadius: 5,
        },
        buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: hp(3),
        },
        innerContent: {
          paddingHorizontal: wp(4),
        },
        heading: {
          color: COLORS.darkGray,
          marginVertical: hp(2),
        },
        titleContainer: {
          backgroundColor: COLORS.orange,
          paddingHorizontal: wp(4),
          paddingVertical: hp(2),
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          backgroundColor: COLORS.white,
          borderRadius: 10,
        },
        title: {
          fontSize: normalize(14),
          fontWeight: 'bold',
          color: COLORS.white,
          textAlign: 'center',
        },
      }),
    []
  );

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Update Password</Text>
          </View>
          <View style={styles.innerContent}>
            <Text style={styles.heading}>
              Here you can update the password of your account
            </Text>
            <CustomInput
              name="Old Password"
              placeholder="Old Password"
              value={data.oldPassword}
              setValue={val => onChangeValue('oldPassword', val)}
            />
            <CustomInput
              name="New Password"
              placeholder="New Password"
              value={data.newPassword}
              setValue={val => onChangeValue('newPassword', val)}
            />
            {errorMsg ? <Text style={styles.errorTxt}>{errorMsg}</Text> : null}
            <View style={styles.buttonContainer}>
              <AppButton
                title="Cancel"
                onPress={onClose}
                style={styles.btnStyle}
              />
              <AppButton
                loading={loading}
                title="Save"
                onPress={() => onSave(data)}
                style={styles.btnStyle}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(UpdatePassword);
