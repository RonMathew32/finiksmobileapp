import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconClose from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../theme/colors';
import { hp, normalize, wp } from '../../theme/dimensions';

const WrongNumberModal = ({ isVisible, onClose, onSave, voter }) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleSave = useCallback(() => {
    const updatedWrongNumber = {
      MOBILE_NUM: checkedOne ? voter?.MOBILE_NUM : '',
      PHONE_NUM: checkedTwo ? voter?.PHONE_NUM : '',
    };
    onSave(updatedWrongNumber);
    onClose();
  }, [checkedOne, checkedTwo, voter, onSave, onClose]);

  const handleCheckboxToggle = useCallback(
    (checkbox, setCheckbox) => {
      setCheckbox((prev) => !prev);
    },
    []
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        titleContainer: {
          backgroundColor: COLORS.orange,
          paddingHorizontal: wp(4),
          paddingVertical: hp(2),
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          backgroundColor: COLORS.white,
          borderRadius: 10,
          borderWidth: 0.3, 
          borderColor: COLORS.lavendarWhite 
        },
        checkContent: {
          padding: 30,
        },
        title: {
          fontSize: normalize(14),
          fontWeight: 'bold',
          color: COLORS.white,
          width: wp(60),
          marginLeft: wp(6),
          textAlign: 'center',
        },
        checkbox: {
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        },
        checkboxLabel: {
          marginLeft: 10,
          color: COLORS.darkGray,
          fontSize: normalize(13),
        },
        buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        },
        button: {
          flex: 1,
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          alignItems: 'center',
        },
        buttonText: {
          color: COLORS.hardCodeWhite,
          fontWeight: 'bold',
        },
      }),
    []
  );

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text></Text>
            <Text style={styles.title}>Please select which number is incorrect</Text>
            <TouchableOpacity onPress={onClose}>
              <IconClose name="cross" color={COLORS.white} size={hp(3)} />
            </TouchableOpacity>
          </View>
          <View style={styles.checkContent}>
            {[{ id: 'MOBILE_NUM', name: 'Mobile Number' }, { id: 'PHONE_NUM', name: 'Phone Number' }].map((numberType, index) => (
              <TouchableOpacity
                key={index}
                style={styles.checkbox}
                onPress={() =>
                  handleCheckboxToggle(
                    numberType?.id === 'MOBILE_NUM' ? checkedOne : checkedTwo,
                    numberType?.id === 'MOBILE_NUM' ? setCheckedOne : setCheckedTwo
                  )
                }>
                <Icon
                  name={
                    numberType?.id === 'MOBILE_NUM'
                      ? checkedOne
                        ? 'check-square-o'
                        : 'square-o'
                      : checkedTwo
                        ? 'check-square-o'
                        : 'square-o'
                  }
                  size={30}
                  color={numberType?.id === 'MOBILE_NUM'
                    ? checkedOne
                      ? COLORS?.orange
                      : COLORS.lavendarWhiteDark
                    : checkedTwo
                      ? COLORS?.orange
                      : COLORS.lavendarWhiteDark
                  }
                />
                <Text style={styles.checkboxLabel}>{numberType?.name}: {voter?.[numberType?.id]}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onClose} style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(WrongNumberModal);
