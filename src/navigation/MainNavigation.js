import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { useSelector } from 'react-redux';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
// import AuthNavigation from './AuthNavigation';
// import CompaignSelection from '../screens/CompaignSelection';
// import Profile from '../screens/Profile';
import OtpVerify from '../screens/auth/OtpVerify';
import { useSelector } from 'react-redux';
// import UpdateVoterInfo from '../screens/Authenticated/PhoneBanking/UpdateVoterInfo';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { token } = useSelector((state) => state.authRed);

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{ headerShown: false }}>
      {/* {token ? (
        <Stack.Group navigationKey={token ? 'user' : 'none'}>
          <Stack.Screen component={CompaignSelection} name="CompaignSelection" />
          <Stack.Screen component={Profile} name="Profile" />
          <Stack.Screen component={AuthNavigation} name="Authenticated" />
          <Stack.Screen component={UpdateVoterInfo} name="UpdateVoterInfo" />
        </Stack.Group>
      ) : (
        <> */}
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
          <Stack.Screen component={OtpVerify} name="OtpVerify" /> 
        {/* </>
      {/* )} */}
    </Stack.Navigator>
  );
};


export default MainNavigation;
