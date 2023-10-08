import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Montserrat,
  MontserratBold,
  hp,
  normalize,
  wp,
} from '../../../../utils/Constants';

const SelectionButton = ({onNextPress, selected, setSelected}) => {
  return (
    <>
      <View style={styles.btnsbox}>
        <Button
          onPress={() => setSelected('wrong')}
          name="Wrong number"
          selected={selected == 'wrong'}
        />
        <Button
          onPress={() => setSelected('donot')}
          name="Do Not Call"
          selected={selected == 'donot'}
        />
        <Button
          onPress={() => setSelected('cotact')}
          name="Contact Later"
          selected={selected == 'cotact'}
        />
        <Button
          onPress={() => setSelected('survey')}
          name="Survey"
          selected={selected == 'survey'}
        />
      </View>
      <TouchableOpacity onPress={onNextPress} style={[styles.btn2]}>
        <Text style={styles.name2}>Next Voter</Text>
      </TouchableOpacity>
    </>
  );
};

const Button = ({name, onPress, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, {backgroundColor: selected ? '#D12E2F' : '#D9D9D9'}]}>
      <Text style={[styles.name, {color: selected ? 'white' : '#545454'}]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectionButton;

const styles = StyleSheet.create({
  btnsbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: wp(2),
    rowGap: wp(2),
    marginTop: hp(2),
  },
  btn: {
    width: wp(44.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
  },
  name: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    paddingVertical: hp(1.5),
  },
  btn2: {
    backgroundColor: '#FF914D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    marginTop: hp(2),
  },
  name2: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    paddingVertical: hp(1.5),
    color: 'white',
  },
});
