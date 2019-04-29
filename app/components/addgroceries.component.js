import React, {Component} from 'react'
import firebase from 'firebase';

  export default class AddGroceries extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return null;
  }
}
export const addItem = (item) => {
  var userId = firebase.auth().currentUser.uid;

  firebase.database().ref('/groceries/'+userId+'items').push({
    name: itemName
  });
}
