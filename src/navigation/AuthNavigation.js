import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Chat from '../screens/chat/Chat';
import LeaderBoard from '../screens/leadBoard/LeaderBoard';
import Canvass from '../screens/canvass/Canvass';
import PhoneBankingStack from './PhoneBankingStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import routes from '../constants/routes';

const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {display: getTabBarVisibility(route)},
      })}>
      <Tab.Screen
        name={routes.Home}
        component={Home}
        options={{tabBarLabel: routes.Home}}
      />
      <Tab.Screen
        name={routes.Chat}
        component={Chat}
        options={{tabBarLabel: routes.Chat}}
      />
      <Tab.Screen
        name={routes.LeaderBoard}
        component={LeaderBoard}
        options={{tabBarLabel: routes.LeaderBoard}}
      />
      <Tab.Screen
        name={routes.PhoneBankingStack}
        component={PhoneBankingStack}
        options={{tabBarLabel: routes.PhoneBank}}
      />
      <Tab.Screen
        name={routes.Canvass}
        component={Canvass}
        options={{tabBarLabel: routes.Canvass}}
      />
    </Tab.Navigator>
  );
};

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    [routes.VoterCheck, routes.TotalVoters, routes.AddToTeam].includes(
      routeName,
    )
  ) {
    return 'none';
  }

  return 'flex';
}

export default AuthNavigation;
