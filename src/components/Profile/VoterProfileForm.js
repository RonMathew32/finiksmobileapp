import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomInput} from './ProfileForm';
import {hp} from '../../../utils/Constants';

const VoterProfileForm = () => {
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
    </View>
  );
};

export default VoterProfileForm;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(4),
  },
});
