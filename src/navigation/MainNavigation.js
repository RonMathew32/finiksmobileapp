import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Login} name="Register" />
    </Stack.Navigator>
  );
};

export default MainNavigation;
