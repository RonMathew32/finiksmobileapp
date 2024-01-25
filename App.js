import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {useFonts} from 'expo-font';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { FONTS } from './src/theme/fonts';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';

const App = () => {
  const [fontsLoaded] = useFonts(FONTS);
  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
        <RootSiblingParent>
          <MainNavigation />
          </RootSiblingParent>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
