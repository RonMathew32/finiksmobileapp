import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import AuthNavigation from './AuthNavigation';
import CompaignSelection from '../screens/campaign/CompaignSelection';
import Profile from '../screens/profile/Profile';
import OtpVerify from '../screens/auth/OtpVerify';
import { useSelector } from 'react-redux';
import routes from '../constants/routes';
import UpdateVoterInfo from '../screens/phoneBanking/UpdateVoterInfo';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { token } = useSelector((state) => state.authRed);

  return (
    <Stack.Navigator
      initialRouteName={routes.Login}
      screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Group navigationKey={token ? 'user' : 'none'}>
          <Stack.Screen component={CompaignSelection} name={routes.CompaignSelection} />
          <Stack.Screen component={Profile} name={routes.Profile} />
          <Stack.Screen component={AuthNavigation} name={routes.AuthNavigation} />
          <Stack.Screen component={UpdateVoterInfo} name={routes.UpdateVoterInfo} />
        </Stack.Group>
      ) : (
        <> 
          <Stack.Screen component={Login} name={routes.Login} />
          <Stack.Screen component={Register} name={routes.Register} />
        </>
       )
       }
       <Stack.Screen component={OtpVerify} name={routes.OtpVerify} /> 
    </Stack.Navigator>
  );
};


export default MainNavigation;
