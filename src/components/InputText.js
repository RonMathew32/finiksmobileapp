import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../utils/Constants';

const InputText = ({
  placeholder,
  containerstyle,
  textinputstyle,
  value,
  onChangeText,
  LeftComponent,
  multiline,
  type,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.container, containerstyle]}>
      {LeftComponent && <LeftComponent />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(154, 159, 165, 1)"
        style={[styles.textinput, textinputstyle]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        keyboardType={type ? 'phone-pad' : 'default'}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: wp(3.5),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  textinput: {
    padding: 0,
    margin: 0,
    height: hp(4),
    flex: 1,
    fontSize: normalize(14),
    color: 'rgba(151, 151, 151, 1)',
  },
});
