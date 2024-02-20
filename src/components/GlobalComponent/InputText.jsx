import { StyleSheet, View, TextInput } from 'react-native';
import React, { useMemo } from 'react';
import { hp, normalize, wp } from '../../theme/dimensions';
import stylee from '../../constants/stylee';

const InputText = ({
  placeholder,
  containerStyle,
  textInputStyle,
  value,
  onChangeText,
  LeftComponent,
  multiline,
  type,
  onChange,
  maxLength,
  secureTextEntry,
}) => {
  const inputTextStyle = useMemo(
    () => [styles.textInput, textInputStyle],
    [textInputStyle]
  );

  const MemoizedLeftComponent = useMemo(() => LeftComponent && <LeftComponent />, [LeftComponent]);

  return (
    <View style={[styles.container, stylee.alignR, containerStyle]}>
      {MemoizedLeftComponent}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(154, 159, 165, 1)"
        style={inputTextStyle}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        multiline={multiline}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        keyboardType={type ? 'phone-pad' : 'default'}
      />
    </View>
  );
};

InputText.defaultProps = {
  multiline: false,
  secureTextEntry: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: wp(3.5),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: hp(1.5),
  },
  textInput: {
    padding: 0,
    margin: 0,
    height: hp(4),
    flex: 1,
    fontSize: normalize(14),
    color: 'rgba(151, 151, 151, 1)',
  },
});

export default React.memo(InputText);
