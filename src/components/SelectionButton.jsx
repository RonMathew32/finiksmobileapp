import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {hp, normalize, wp} from '../theme/dimensions';
import {MontserratBold} from '../theme/fonts';
import {COLORS} from '../theme/colors';
import stylee from '../constants/stylee';

const ButtonItem = ({item, onPress, selected}) => (
  <TouchableOpacity onPress={onPress} style={[styles.btn(selected), stylee.alignJC]}>
    <Text style={styles.name(selected)}>{item?.name}</Text>
  </TouchableOpacity>
);

const SelectionButton = ({
  onNextPress,
  selected,
  nextVoterLoader,
  buttons,
  handleButtonPress,
  mainBtnTxt
}) => {

  return (
    <>
      <FlatList
        data={buttons}
        renderItem={({item}) => (
          <ButtonItem
            item={item}
            onPress={() => handleButtonPress(item.type)}
            selected={selected === item.type}
          />
        )}
        keyExtractor={item => item.type}
        contentContainerStyle={{marginTop: 10}}
        numColumns={2}
      />
      <TouchableOpacity onPress={onNextPress} style={[stylee.alignJC, styles.btn2]}>
        {nextVoterLoader ? (
          <ActivityIndicator color={COLORS.white} size='small' />
        ) : (
          <Text style={styles.name2}>{mainBtnTxt}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn: selected => {
    return {
      width: wp(44.7),
      borderRadius: wp(1),
      backgroundColor: selected ? COLORS.orange : COLORS.lavendarWhiteDim,
      margin: 3,
    };
  },
  name: selected => {
    return {
      fontFamily: MontserratBold,
      fontSize: normalize(16),
      paddingVertical: hp(1.5),
      color: selected ? COLORS.white : COLORS.darkGray,
    };
  },
  btn2: {
    backgroundColor: COLORS.orange,
    borderRadius: wp(1),
    marginTop: hp(2),
  },
  name2: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    paddingVertical: hp(1.5),
    color: COLORS.white,
  },
});

export default SelectionButton;
