import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import SignUpScreen from './screens/signup.screen';
import SetHouseholdScreen from './screens/sethousehold.screen';
import CreateHouseholdScreen from './screens/createhousehold.screen'
import HomeScreen from './screens/home.screen';
import BillsScreen from './screens/bills.screen';
import GroceriesScreen from './screens/groceries.screen';
import EditProfileScreen from './screens/editprofile.screen';
import RoommatesScreen from './screens/roommates.screen';
import ViewRoommateScreen from './screens/viewroommate.screen';
import CalendarScreen from './screens/calendar.screen';
import AddEventScreen from './screens/addevent.screen';
import ChoresScreen from './screens/chores.screen';
import AddChoreScreen from './screens/addchore.screen';
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

const Bills = {
  screen: BillsScreen,
  navigationOptions: {
    header: null
  }
}
const Groceries = {
  screen: GroceriesScreen,
  navigationOptions: {
    header: null
  }
}
const EditProfile = {
  screen: EditProfileScreen,
  navigationOptions: {
    header: null
  }
}
const Roommates = {
  screen: RoommatesScreen,
  navigationOptions: {
    header: null
  }
}
const ViewRoommate = {
  screen: ViewRoommateScreen,
  navigationOptions: {
    header: null
  }
}
const Calendar = {
  screen: CalendarScreen,
  navigationOptions: {
    header: null
  }
}
const AddEvent = {
  screen: AddEventScreen,
  navigationOptions: {
    header: null
  }
}
const Chores = {
  screen: ChoresScreen,
  navigationOptions: {
    header: null
  }
}
const AddChore = {
  screen: AddChoreScreen,
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
  Home: Home,
  Bills: Bills,
  Groceries: Groceries,
  EditProfile: EditProfile,
  Roommates: Roommates,
  ViewRoommate: ViewRoommate,
  Calendar: Calendar,
  AddEvent: AddEvent,
  Chores: Chores,
  AddChore: AddChore,

}, RouteConfig)

export default createAppContainer(AppNavigator);
