import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../theme/colors';
import {normalize, wp} from '../../theme/dimensions';

const WrongNumberModal = ({isVisible, onClose, onSave, voter}) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleSave = () => {
    const updatedWrongNumber = {
      MOBILE_NUM: checkedOne ? voter?.MOBILE_NUM : '',
      PHONE_NUM: checkedTwo ? voter?.PHONE_NUM : '',
    };
    onSave(updatedWrongNumber);
    onClose();
  };

  const handleCheckboxToggle = (checkbox, setCheckbox) => {
    setCheckbox(prev => !prev);
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Please select which number is incorrect
          </Text>
          <View style={styles.checkContent}>
            {[{id: 'MOBILE_NUM', name : 'Mobile Number'}, {id: 'PHONE_NUM', name : 'Phone Number'}].map((numberType, index) => (
              <TouchableOpacity
                key={index}
                style={styles.checkbox}
                onPress={() =>
                  handleCheckboxToggle(
                    numberType?.id === 'MOBILE_NUM' ? checkedOne : checkedTwo,
                    numberType?.id  === 'MOBILE_NUM' ? setCheckedOne : setCheckedTwo,
                  )
                }>
                <Icon
                  name={
                    numberType?.id  === 'MOBILE_NUM'
                      ? checkedOne
                        ? 'check-square-o'
                        : 'square-o'
                      : checkedTwo
                      ? 'check-square-o'
                      : 'square-o'
                  }
                  size={30}
                  color={numberType?.id  === 'MOBILE_NUM'
                  ? checkedOne
                    ? COLORS?.orange
                    : COLORS.lavendarWhiteDark
                  : checkedTwo
                  ? COLORS?.orange
                  : COLORS.lavendarWhiteDark}
                />
                <Text style={styles.checkboxLabel}>{numberType?.name}: {voter?.[numberType?.id ]}</Text>
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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  checkContent: {
    padding: 30,
  },
  title: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.white,
    backgroundColor: COLORS.orange,
    padding: 10,
    paddingHorizontal: wp(10),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
    backgroundColor: COLORS.orangeReddish,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default WrongNumberModal;
