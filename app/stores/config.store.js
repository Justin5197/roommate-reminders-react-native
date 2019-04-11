import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBrWLvG1SUw6bOhB4W_LJEQUItT1ne5cnc",
    authDomain: "roommate-reminders-93db8.firebaseapp.com",
    databaseURL: "https://roommate-reminders-93db8.firebaseio.com",
    projectId: "roommate-reminders-93db8",
    storageBucket: "roommate-reminders-93db8.appspot.com",
    messagingSenderId: "11136041629"
  };


export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImg = require('../../images/RRlogo.png')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}
