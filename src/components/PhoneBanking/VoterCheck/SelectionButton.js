import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {hp, normalize, wp} from '../../../theme/dimensions';
import {MontserratBold} from '../../../theme/fonts';
import {COLORS} from '../../../theme/colors';

const ButtonItem = ({item, onPress, selected}) => (
  <TouchableOpacity onPress={onPress} style={styles.btn(selected)}>
    <Text style={styles.name(selected)}>{item.name}</Text>
  </TouchableOpacity>
);

const SelectionButton = ({
  onNextPress,
  selected,
  setSelected,
  nextVoterLoader,
}) => {
  const handleButtonPress = type => {
    setSelected(prev => (prev === type ? null : type));
  };

  const buttons = [
    {name: 'Wrong number', type: 'wrong'},
    {name: 'Do Not Call', type: 'donot'},
    {name: 'Contact Later', type: 'contact'},
    {name: 'Survey', type: 'survey'},
  ];

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
      <TouchableOpacity onPress={onNextPress} style={styles.btn2}>
        {nextVoterLoader ? (
          <ActivityIndicator color={COLORS.white} size='small' />
        ) : (
          <Text style={styles.name2}>Next Voter</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnsbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: wp(2),
    rowGap: wp(2),
    marginTop: hp(2),
  },
  btn: selected => {
    return {
      width: wp(44.7),
      alignItems: 'center',
      justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
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
