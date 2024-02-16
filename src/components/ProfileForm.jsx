import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {hp, normalize, wp} from '../theme/dimensions';
import {MontserratMedium} from '../theme/fonts';
import {useDispatch} from 'react-redux';
import {setLogout} from '../redux/actions/auth.actions';
import {COLORS} from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const CustomInput = ({
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
      <View style={[styles.inputbox, containerStyle, canvassChecks]}>
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

const ProfileForm = ({style}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    address: '',
  });

  const onChangeValue = useCallback((key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(setLogout(null));
  }, [dispatch]);

  return (
    <View style={[styles.container, style]}>
      <CustomInput
        name="First Name"
        placeholder="First Name"
        value={data.firstname}
        setValue={val => onChangeValue('firstname', val)}
      />
      <CustomInput
        name="Last Name"
        placeholder="Last Name"
        value={data.lastname}
        setValue={val => onChangeValue('lastname', val)}
      />
      <CustomInput
        name="Phone Number"
        placeholder="Phone Number"
        value={data.phonenumber}
        setValue={val => onChangeValue('phonenumber', val)}
      />
      <CustomInput
        name="Email"
        placeholder="Email"
        value={data.email}
        setValue={val => onChangeValue('email', val)}
      />
      <CustomInput
        name="Address"
        placeholder="Address"
        value={data.address}
        setValue={val => onChangeValue('address', val)}
      />
      <TouchableOpacity
        onPress={handleLogout}
        style={styles.button}>
        <Text style={styles.buttontxt}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(4),
  },
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
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
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
  },
  button: {
    height: hp(4.5),
    width: '70%',
    backgroundColor: 'rgba(209, 46, 47, 1)',
    alignSelf: 'center',
    borderRadius: wp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
  },

  buttontxt: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLORS.white,
  },
});
