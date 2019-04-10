import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}
const RouteConfig = {
  initialRoute: 'Splash'
}
const AppNavigator = createDrawerNavigator({
  Splash: Splash
}, RouteConfig)

export default createAppContainer(AppNavigator);
