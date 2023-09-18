import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Authenticated/Home';
import Chat from '../screens/Authenticated/Chat';
import LeaderBoard from '../screens/Authenticated/LeaderBoard';
import PhoneBank from '../screens/Authenticated/PhoneBank';
import Canvass from '../screens/Authenticated/Canvass';

const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
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
        component={PhoneBank}
        name="PhoneBank"
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

export default AuthNavigation;
