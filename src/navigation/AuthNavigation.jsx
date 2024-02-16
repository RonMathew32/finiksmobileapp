import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import routes from '../constants/routes';
import {COLORS} from '../theme/colors';
import {hp} from '../theme/dimensions';
import Home from '../screens/home/Home';
// import Chat from '../screens/chat/Chat';
// import LeaderBoard from '../screens/leadBoard/LeaderBoard';
import PhoneBankingStack from './PhoneBankingStack';
// import Canvass from '../screens/canvass/Canvass';
import CanvassStack from './CanvassStack';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarStyle: {
    display: getTabBarVisibility(route),
    backgroundColor: COLORS.background,
  },
  tabBarActiveTintColor: COLORS.primary,
  tabBarInactiveTintColor: COLORS.lavendarWhiteDark,
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    switch (route.name) {
      case routes.Home:
        iconName = 'home';
        break;
      // case routes.Chat:
      //   iconName = 'comments';
      //   break;
      // case routes.LeaderBoard:
      //   iconName = 'chart-bar';
      //   break;
      case routes.PhoneBankingStack:
        iconName = 'phone';
        break;
      case routes.CanvassStack:
        iconName = 'map-marker-alt';
        break;
      default:
        iconName = ''; // Handle default case
    }

    return (
      <Icon
        name={iconName}
        size={hp(2.8)}
        color={focused ? COLORS.primary : COLORS.lavendarWhiteDark}
      />
    );
  },
});

const AuthNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={routes.Home}
        component={Home}
        options={{tabBarLabel: routes.Home}}
      />
      {/* <Tab.Screen
        name={routes.Chat}
        component={Chat}
        options={{ tabBarLabel: routes.Chat }}
      />
      <Tab.Screen
        name={routes.LeaderBoard}
        component={LeaderBoard}
        options={{ tabBarLabel: routes.LeaderBoard }}
      /> */}
      <Tab.Screen
        name={routes.PhoneBankingStack}
        component={PhoneBankingStack}
        options={{tabBarLabel: routes.PhoneBank}}
      />
      <Tab.Screen
        name={routes.CanvassStack}
        component={CanvassStack}
        options={{tabBarLabel: routes.Canvass}}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return [routes.VoterCheck, routes.TotalVoters, routes.AddToTeam].includes(
    routeName,
  )
    ? 'none'
    : 'flex';
};

export default AuthNavigation;
