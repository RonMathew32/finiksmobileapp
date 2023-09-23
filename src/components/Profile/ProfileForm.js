import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MontserratMedium, hp, normalize, wp} from '../../../utils/Constants';

const CustomInput = ({name, placeholder, value, setValue}) => {
  return (
    <View>
      <Text style={styles.nametxt}>{name}</Text>
      <View style={styles.inputbox}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          style={styles.textinput}
        />
      </View>
    </View>
  );
};

const ProfileForm = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    address: '',
  });

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };
  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.button}>
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
    color: '#D12E2F',
    marginBottom: hp(1),
  },
  inputbox: {
    backgroundColor: 'white',
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
    borderRadius: wp(1),
    marginBottom: hp(1.5),
  },
  textinput: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(12),
    color: '#545454',
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
    color: 'white',
  },
});
