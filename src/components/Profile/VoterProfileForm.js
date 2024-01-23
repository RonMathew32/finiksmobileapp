import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { hp } from '../../theme/dimensions';
import { CustomInput } from './ProfileForm';
import useReduxStore from '../../hooks/useReduxStore';

const VoterProfileForm = React.memo(({ onSaveData }) => {
  const { listId, campaignOwnerID, currentVoter } = useReduxStore();
  const [data, setData] = useState(() => ({
    firstName: currentVoter?.FIRSTNAME ?? '',
    lastName: currentVoter?.LASTNAME ?? '',
    address: currentVoter?.ADDRESS ?? '',
    phoneNumber: currentVoter?.PHONE_NUM ?? '',
    mobileNumber: currentVoter?.MOBILE_NUM ?? '',
    email: currentVoter?.EMAIL ?? currentVoter?.EMAIL2 ?? currentVoter?.EMAIL3 ?? '',
    voterId: currentVoter?._id,
    listId: listId,
    campaignId: campaignOwnerID,
  }));

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
    onSaveData({...data, [key]: value})
  };

  useEffect(() => {
    onSaveData(data)
  }, [])
  
  return (
    <View style={styles.container}>
      <CustomInput
        name="First Name"
        placeholder="First Name"
        value={data.firstName}
        setValue={val => onChangeValue('firstName', val)}
      />
      <CustomInput
        name="Last Name"
        placeholder="Last Name"
        value={data.lastName}
        setValue={val => onChangeValue('lastName', val)}
      />
      <CustomInput
        name="Phone Number"
        placeholder="Phone Number"
        value={data.phoneNumber}
        keyboardType='phone-pad'
        setValue={val => onChangeValue('phoneNumber', val)}
      />
      <CustomInput
        name="Email"
        placeholder="Email"
        value={data.email}
        keyboardType='phone-pad'
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
});

export default VoterProfileForm;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(4),
  },
});
