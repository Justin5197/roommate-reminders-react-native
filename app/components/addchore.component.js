import React, {Component} from 'react'
import firebase from 'firebase';

//export default class AddGroceries extends Component {
  export default class AddChore extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return null;
  }
}
export const addItem =  (item) => {
    var userId = firebase.auth().currentUser.uid;

    firebase.database().ref('/chores/'+userId+'/items').push({
        name: item
    });
}
