import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import AuthNavigation from './AuthNavigation';
import CompaignSelection from '../screens/CompaignSelection';
import Profile from '../screens/Profile';
import OtpVerify from '../screens/OtpVerify';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={CompaignSelection} name="CompaignSelection" />
      <Stack.Screen component={Profile} name="Profile" />
      <Stack.Screen component={OtpVerify} name="OtpVerify" />
      <Stack.Screen component={AuthNavigation} name="Authenticated" />
    </Stack.Navigator>
  );
};

export default MainNavigation;
