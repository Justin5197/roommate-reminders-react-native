import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import SignUpScreen from './screens/signup.screen';
import SetHouseholdScreen from './screens/sethousehold.screen';
import CreateHouseholdScreen from './screens/createhousehold.screen'
import HomeScreen from './screens/home.screen';

const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const Login = {
  screen : LoginScreen,
  navigationOptions: {
    header: null
  }
}

const SignUp = {
  screen : SignUpScreen,
  navigationOptions: {
    drawerLabel: 'Sign Up'
  }
}

const SetHousehold = {
  screen: SetHouseholdScreen,
  navigationOptions: {
    drawerLabel: 'Set Up Household'
  }
}

const CreateHousehold = {
  screen: CreateHouseholdScreen,
  navigationOptions: {
    drawerLabel: 'Create New Household'
  }
}

const Home = {
  screen: HomeScreen,
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
  SignUp: SignUp,
  SetHousehold: SetHousehold,
  CreateHousehold: CreateHousehold,
  Home: Home
}, RouteConfig)

export default createAppContainer(AppNavigator);
