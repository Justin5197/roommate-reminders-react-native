import firebase from 'firebase';

export const addGrocery =  (item) => {
    var userId = global.housepinNumber;
    firebase.database().ref('/groceries/'+userId).push({
        name: item
    });
}

export const addChores =  (item) => {
    var userId = global.housepinNumber;
    firebase.database().ref('/chores/'+userId).push({
        name: item
    });
}
