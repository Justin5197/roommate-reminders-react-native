import {observable, action} from 'mobx';
import firebase from 'firebase';

export default class AuthStore {
  @observable authUser = null;

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      this.authUser = user
    })
  }

  @action
  signIn({email, password}) {
    if(this.authUser) {
      return Promise.resolve(this.authUser)
    }
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  @action
  signUp({email, password}) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  @action
  currentUser() {
    return firebase.auth().currentUser
  }
}
