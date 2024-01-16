import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VoterCheck from '../screens/phoneBanking/VoterCheck';
import PhoneBank from '../screens/phoneBanking/PhoneBank';
import TotalVoters from '../screens/phoneBanking/TotalVoters';
import PhoneBankingRecords from '../screens/phoneBanking/PhoneBankingRecords';

const Stack = createNativeStackNavigator();

const PhoneBanking = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PhoneBank" component={PhoneBank} />
      <Stack.Screen
        name="PhoneBankingRecords"
        component={PhoneBankingRecords}
      />
      <Stack.Screen name="VoterCheck" component={VoterCheck} />
    </Stack.Navigator>
  );
};

export default PhoneBanking;
