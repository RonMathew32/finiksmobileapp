import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VoterCheck from '../screens/phoneBanking/VoterCheck';
import PhoneBank from '../screens/phoneBanking/PhoneBank';
import TotalVoters from '../screens/phoneBanking/TotalVoters';
import PhoneBankingRecords from '../screens/phoneBanking/PhoneBankingRecords';
import routes from '../constants/routes';

const Stack = createNativeStackNavigator();

const PhoneBankingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.PhoneBank} component={PhoneBank} />
      <Stack.Screen name={routes.PhoneBankingRecords} component={PhoneBankingRecords} />
      <Stack.Screen name={routes.VoterCheck} component={VoterCheck} />
    </Stack.Navigator>
  );
};

export default PhoneBankingStack;
