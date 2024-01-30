import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TotalVoters from '../screens/canvass/TotalVoters';
import routes from '../constants/routes';
import Canvass from '../screens/canvass/Canvass';
import CompaignSelection from '../screens/campaign/CompaignSelection';
import VoterDetails from '../screens/canvass/VoterDetails';
import UpdateVoterInfo from '../screens/phoneBanking/UpdateVoterInfo';

const Stack = createNativeStackNavigator();

const CanvassStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.Canvass} component={Canvass} />
      <Stack.Screen name={routes.UpdateVoterInfo} component={UpdateVoterInfo} />
      <Stack.Screen name={routes.CompaignSelection} component={CompaignSelection} />
      <Stack.Screen name={routes.TotalVoters} component={TotalVoters} />
      <Stack.Screen name={routes.VoterDetails} component={VoterDetails} />

    </Stack.Navigator>
  );
};

export default CanvassStack;
