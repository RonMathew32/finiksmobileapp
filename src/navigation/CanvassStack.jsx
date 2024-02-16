import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TotalVoters from '../screens/canvass/TotalVoters';
import routes from '../constants/routes';
import Canvass from '../screens/canvass/Canvass';
import VoterDetails from '../screens/canvass/VoterDetails';
import UpdateVoterInfo from '../screens/phoneBanking/UpdateVoterInfo';
import CampaignSelection from '../screens/campaign/CampaignSelection';
import Contacted from '../screens/canvass/Contacted';
import List from '../screens/canvass/List';
import CanvassMap from '../screens/canvass/CanvassMap'
import CanvassMapDetails from '../screens/canvass/CanvassMapDetails';

const Stack = createNativeStackNavigator();

const CanvassStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.Canvass} component={Canvass} />
      <Stack.Screen name={routes.CampaignSelection} component={CampaignSelection} />
      <Stack.Screen name={routes.List} component={List} />
      <Stack.Screen name={routes.CanvassMap} component={CanvassMap} />
      <Stack.Screen name={routes.CanvassMapDetails} component={CanvassMapDetails} />
      <Stack.Screen name={routes.UpdateVoterInfo} component={UpdateVoterInfo} />
      <Stack.Screen name={routes.Contacted} component={Contacted} />
      <Stack.Screen name={routes.TotalVoters} component={TotalVoters} />
      <Stack.Screen name={routes.VoterDetails} component={VoterDetails} />

    </Stack.Navigator>
  );
};

export default CanvassStack;