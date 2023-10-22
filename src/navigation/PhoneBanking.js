import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VoterCheck from '../screens/Authenticated/PhoneBanking/VoterCheck';
import PhoneBank from '../screens/Authenticated/PhoneBanking/PhoneBank';
import TotalVoters from '../screens/Authenticated/PhoneBanking/TotalVoters';

const Stack = createNativeStackNavigator();

const PhoneBanking = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PhoneBank" component={PhoneBank} />
      <Stack.Screen name="VoterCheck" component={VoterCheck} />
    </Stack.Navigator>
  );
};

export default PhoneBanking;

const styles = StyleSheet.create({});
