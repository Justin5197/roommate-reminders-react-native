import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';

const Login = {
  screen : LoginScreen,
  navigationOptions: {
    header: null,
    //title: 'Login'
  }
}
const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}
const RouteConfig = {
  initialRoute: 'Login'
  //initialRoute: 'Splash'
}
const AppNavigator = createDrawerNavigator({
  Login: Login
  //Splash: Splash
}, RouteConfig)

export default createAppContainer(AppNavigator);
