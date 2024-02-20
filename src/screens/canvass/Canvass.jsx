import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {COLORS} from '../../theme/colors';
import HomeHeader from '../../components/Headers/HomeHeader';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratExtraBold} from '../../theme/fonts';
import CustomInput from '../../components/GlobalComponent/CustomInput';
import Icon from 'react-native-vector-icons/Ionicons';
import routes from '../../constants/routes';
import stylee from '../../constants/stylee';
import DropDown from '../../components/GlobalComponent/DropDown';
import { canvasSearchOptions } from '../../constants/dummy';

const Canvass = ({navigation}) => {
  const [selected, setSelected] = useState('Un Select')
  const [data, setData] = useState({
    byName: '',
    byLocation: '',
    byList: '',
  });


  const onChangeValue = useCallback((key, value) => {
      setData({...data, [key]: value})
    },[data]);

  const onPressLocationByList = useCallback(() => {
    navigation.navigate(routes.CampaignSelection, {enableBackButton: true});
  }, [navigation]);

  const onPressLocationByVoter = useCallback(() => {
    navigation.navigate(routes.TotalVoters);
  }, [navigation]);

  const onPressAddVoter = useCallback(() => {
    navigation.navigate(routes?.UpdateVoterInfo, {canvass: true});
  },[navigation]);

  const onPressSearch = ()=>{
    console.log(data.byName, selected?.name)
  }


  return (
    <SafeAreaView style={stylee.container}>
      <HomeHeader canvass={true} onPressAddVoter={onPressAddVoter} />
      <View style={styles.layout}>
        <DropDown
          data={canvasSearchOptions}
          selected={selected}
          setSelected={setSelected}
        />
        <Text style={styles.heading(COLORS.primary)}>Search</Text>
        <Text style={styles.searchBy}>By Voter:</Text>

        <Pressable onPress={onPressLocationByVoter}>
          <CustomInput
            placeholderTextColor={COLORS.lavendarWhite}
            placeholder="Name"
            value={data?.byName}
            textInputStyle={styles.layout}
            setValue={(val)=> onChangeValue('byName', val)}
          />
        </Pressable>

        <CustomInput
          placeholderTextColor={COLORS.lavendarWhite}
          placeholder="Location or Address"
          value={data.byLocation}
          textInputStyle={styles.layout}
          setValue={val => onChangeValue('byLocation', val)}
        />
        <Text style={styles.heading(COLORS.lavendarWhiteDark)}>OR:</Text>
        <Text style={styles.searchBy}>By List:</Text>
        <Pressable onPress={onPressLocationByList}>
          <CustomInput
            placeholderTextColor={COLORS.lavendarWhite}
            placeholder="Location or Address"
            value={data.byList}
            editable={false}
            textInputStyle={styles.layout}
            setValue={val => onChangeValue('byList', val)}
          />
        </Pressable>
        <Pressable onPress={onPressSearch}>
        <Icon
          name="search-circle"
          color={COLORS.primary}
          size={hp(10)}
          style={styles.iconStyle}
        />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Canvass;

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    marginVertical: hp(3),
  },
  searchBy: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
  heading: color => {
    return {
      color: color,
      fontWeight: 'bold',
      fontSize: normalize(28),
      fontFamily: MontserratExtraBold,
      textAlign: 'center',
      marginTop: hp(6),
      marginVertical: hp(4),
    };
  },
  layout: {
    paddingHorizontal: wp(4),
  },
});
