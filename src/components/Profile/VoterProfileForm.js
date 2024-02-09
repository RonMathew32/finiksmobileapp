import {StyleSheet, View} from 'react-native';
import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {hp, wp} from '../../theme/dimensions';
import {CustomInput} from './ProfileForm';
import useReduxStore from '../../hooks/useReduxStore';

const VoterProfileForm = React.memo(
  ({onSaveData, canvass = false, userData, style, isContactInfo = false}) => {
    const {listId, campaignOwnerID} = useReduxStore();

    const initialData = useMemo(
      () => ({
        firstName: userData?.FIRSTNAME ?? userData?.firstName ?? '',
        lastName: userData?.LASTNAME ?? userData?.lastName ?? '',
        address: userData?.ADDRESS ?? userData?.address ?? '',
        phoneNumber: userData?.PHONE_NUM ?? userData?.phoneNumber ?? '',
        mobileNumber: userData?.MOBILE_NUM ?? userData?.mobileNumber ?? '',
        email:
          userData?.EMAIL ??
          userData?.EMAIL2 ??
          userData?.EMAIL3 ??
          userData?.email ??
          '',
        preferredName: '',
        voterId: userData?._id ?? '',
        listId: listId,
        campaignId: campaignOwnerID,
      }),
      [userData, listId, campaignOwnerID],
    );

    const [data, setData] = useState(initialData);

    const onChangeValue = useCallback(
      (key, value) => {
        setData(prevData => ({...prevData, [key]: value}));
        onSaveData(prevData => ({...prevData, [key]: value}));
      },
      [onSaveData],
    );

    const onPressClearInput = useCallback(
      key => {
        if (canvass) {
          setData(prevData => ({...prevData, [key]: ''}));
        }
      },
      [canvass],
    );

    useEffect(() => {
      if (data?.name) {
        onSaveData(data);
      }
    }, [data, onSaveData]);

    return (
      <View style={[styles.container, style]}>
        {isContactInfo ? null : (
          <CustomInput
            name="First Name"
            placeholder="First Name"
            value={data.firstName}
            setValue={val => onChangeValue('firstName', val)}
            canvass={canvass}
            onPressClearInput={() => onPressClearInput('firstName')}
          />
        )}
        {isContactInfo ? null : (
          <CustomInput
            name="Last Name"
            placeholder="Last Name"
            value={data.lastName}
            setValue={val => onChangeValue('lastName', val)}
            canvass={canvass}
            onPressClearInput={() => onPressClearInput('lastName')}
          />
        )}
        {canvass ? (
          <CustomInput
            name={`Preferred ${isContactInfo? 'First ': ''}Name`}
            placeholder="ex. Josh "
            value={data.preferredName}
            setValue={val => onChangeValue('preferredName', val)}
            canvass={canvass}
            onPressClearInput={() => onPressClearInput('preferredName')}
          />
        ) : null}
        <CustomInput
          name="Phone Number"
          placeholder="Phone Number"
          value={`${data.phoneNumber}`}
          keyboardType="phone-pad"
          setValue={val => onChangeValue('phoneNumber', val)}
          onPressClearInput={() => onPressClearInput('phoneNumber')}
        />
        <CustomInput
          name="Email"
          placeholder="Email"
          value={data.email}
          keyboardType="phone-pad"
          setValue={val => onChangeValue('email', val)}
          canvass={canvass}
          onPressClearInput={() => onPressClearInput('email')}
        />
        <CustomInput
          name="Address"
          placeholder="Address"
          value={data.address}
          setValue={val => onChangeValue('address', val)}
          onPressClearInput={() => onPressClearInput('address')}
        />
      </View>
    );
  },
);

export default VoterProfileForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    marginTop: hp(3),
  },
});
