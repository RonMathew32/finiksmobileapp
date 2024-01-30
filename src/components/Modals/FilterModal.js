import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../theme/colors';

const filterOptions = [
  {icon: 'sort-amount-desc', text: 'Relevance'},
  {icon: 'sort-alpha-asc', text: 'A to Z'},
  {icon: 'sort-alpha-desc', text: 'Z to A'},
];

const FilterModal = ({isVisible, onClose, onOptionPress, active}) => {
  return (
    <Modal
      animationIn="fadeIn"
      backdropOpacity={0}
      isVisible={isVisible}
      onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        {filterOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onOptionPress(index)}
            style={styles.option}>
            <Icon
              name={option.icon}
              size={20}
              color={
                active === index
                  ? COLORS.orangeReddish
                  : COLORS.lavendarWhiteDark
              }
            />
            <Text
              style={{
                color:
                  active === index
                    ? COLORS.orangeReddish
                    : COLORS.lavendarWhiteDark,
              }}>
              {option.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 15,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '60%',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 40,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default React.memo(FilterModal);
