import firebase from 'firebase';

export const addGrocery =  (item) => {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/groceries/'+userId).push({
        name: item
    });
}