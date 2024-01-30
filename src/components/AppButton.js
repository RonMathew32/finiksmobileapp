import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../theme/dimensions';
import {COLORS} from '../theme/colors';

const AppButton = ({
  loading,
  onPress,
  loaderSize = 'small',
  loaderColor = COLORS.white,
  title = '',
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={[styles.button, style]}>
      {loading ? (
        <ActivityIndicator size={loaderSize} color={loaderColor} />
      ) : (
        <Text style={[styles.buttontxt, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    height: hp(6),
    width: '50%',
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
  },

  buttontxt: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLORS.white,
  },
});
