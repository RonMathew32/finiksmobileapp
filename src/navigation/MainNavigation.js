import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import AuthNavigation from './AuthNavigation';
import CompaignSelection from '../screens/CompaignSelection';
import Profile from '../screens/Profile';
import OtpVerify from '../screens/OtpVerify';
import UpdateVoterInfo from '../screens/Authenticated/PhoneBanking/UpdateVoterInfo';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {token} = useSelector(state => state.userReducer);

  return (
    <Stack.Navigator
      initialRouteName={token ? 'CompaignSelection' : 'Login'}
      screenOptions={{headerShown: false}}>
      {token ? (
        <Stack.Group navigationKey={token ? 'user' : 'none'}>
          <Stack.Screen
            component={CompaignSelection}
            name="CompaignSelection"
          />
          <Stack.Screen component={Profile} name="Profile" />

          <Stack.Screen component={AuthNavigation} name="Authenticated" />
          <Stack.Screen component={UpdateVoterInfo} name="UpdateVoterInfo" />
        </Stack.Group>
      ) : (
        <>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
        </>
      )}
      <Stack.Screen component={OtpVerify} name="OtpVerify" />
    </Stack.Navigator>
  );
};

export default MainNavigation;
