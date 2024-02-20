import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';
import { hp, normalize, wp } from '../../theme/dimensions';
import stylee from '../../constants/stylee';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DropDown = ({ data, selected, setSelected }) => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setSelected(data[0]);
  }, []);

  const handleOptionSelect = option => {
    setSelected(option);
    setShowOptions(false);
  };

  const optionsContainer = useMemo(() => styles.optionsContainer, []);

  return (
    <View style={[styles.container, stylee.alignSelfEPostionA]}>
      <TouchableOpacity
        onPress={() => setShowOptions(!showOptions)}
        style={[styles.selectedOption, stylee.alignJSR]}>
        <Text style={styles.selectedTxt}>{selected?.name}</Text>
        <Icon name="arrow-drop-down" size={hp(4)} />
      </TouchableOpacity>
      {showOptions && (
        <View style={optionsContainer}>
          {data?.map(option => (
            <TouchableOpacity
              key={option._id}
              onPress={() => handleOptionSelect(option)}
              style={styles.optionStyles(option?.name == selected?.name)}>
              <Text style={styles.optionTxt}>{option?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectedTxt: {
    textAlign: 'center',
    color: COLORS.hardCodeWhite,
    fontSize: normalize(14)
  },
  container: {
    width: wp(35),
    zIndex: 5,
  },
  selectedOption: {
    borderWidth: 1,
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  optionStyles: val => {
  return {
    padding: 10,
    borderColor: COLORS.lavendarWhite,
    borderWidth: 0.2,
    backgroundColor: val ? COLORS.primary : COLORS.background,
  }},
  optionsContainer: {
    borderWidth: 1,
  },
  optionTxt: {
    color: COLORS.hardCodeWhite,
  },
});

export default DropDown;
