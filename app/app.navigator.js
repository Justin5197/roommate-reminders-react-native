import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import HomeScreen from './screens/login.screen';

const Home = {
  screen: HomeScreen,
  navigationOptions: {
    header: null,
    title: 'Home'
  }
}

const Login = {
  screen : LoginScreen,
  navigationOptions: {
    title: 'Login'
  }
}
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
  Splash: Splash,
  Login: Login,
  Home: Home
}, RouteConfig)

export default createAppContainer(AppNavigator);
