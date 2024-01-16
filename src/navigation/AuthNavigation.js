import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Chat from '../screens/chat/Chat';
import LeaderBoard from '../screens/leadBoard/LeaderBoard';
import Canvass from '../screens/canvass/Canvass';
import PhoneBanking from './PhoneBanking';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {display: getTabBarVisibility(route)},
      })}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        component={Chat}
        name="Chat"
        options={{tabBarLabel: 'Chat'}}
      />
      <Tab.Screen
        component={LeaderBoard}
        name="LeaderBoard"
        options={{tabBarLabel: 'Leader Board'}}
      />
      <Tab.Screen
        component={PhoneBanking}
        name="PhoneBanking"
        options={{tabBarLabel: 'Phone Bank'}}
      />
      <Tab.Screen
        component={Canvass}
        name="Canvass"
        options={{tabBarLabel: 'Canvass'}}
      />
    </Tab.Navigator>
  );
};

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (
    routeName === 'VoterCheck' ||
    routeName === 'TotalVoters' ||
    routeName == 'AddToTeam'
  ) {
    return 'none';
  }

  return 'flex';
}

export default AuthNavigation;
