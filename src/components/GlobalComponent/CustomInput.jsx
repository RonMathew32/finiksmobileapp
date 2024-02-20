import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratMedium} from '../../theme/fonts';
import {COLORS} from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import stylee from '../../constants/stylee';

const CustomInput = ({
  name,
  placeholder,
  placeholderTextColor = COLORS.lavendarWhiteDark,
  value,
  setValue,
  keyboardType,
  textInputStyle,
  containerStyle,
  editable = true,
  canvass = false,
  onPressClearInput
}) => {
  const canvassChecks = {
    flexDirection: canvass ? 'row' : null,
    justifyContent: canvass ? 'space-between' : null,
    alignItems: canvass ? 'center' : null,
  };
  const canvasChecksInput = {
    width: canvass ? wp(70) : null,
  };
  return (
    <View>
      <Text style={styles.nametxt}>{name}</Text>
      <View style={[styles.inputbox, stylee.shadowWithOpactiy, containerStyle, canvassChecks]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          editable={editable}
          onChangeText={setValue}
          style={[styles.textinput, textInputStyle, canvasChecksInput]}
          keyboardType={keyboardType ?? 'default'}
        />
        {canvass ? (
          <TouchableOpacity onPress={onPressClearInput}>
            <Icon name="cancel" color={COLORS.primary} size={hp(3)} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(CustomInput)

const styles = StyleSheet.create({
  nametxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(12),
    color: COLORS.primary,
    marginBottom: hp(1),
  },
  inputbox: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.lavendarWhite,
    borderWidth: 0.2,
    marginBottom: hp(1.5),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.4),
    borderRadius: wp(2),
  },
  textinput: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(12),
    color: COLORS.darkGray,
    padding: 0,
    margin: 0,
  }
});
