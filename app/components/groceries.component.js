import React, {Component} from 'react'
import firebase from 'firebase';

export default class Groceries extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: []
}

componentDidMount() {
  var userId = firebase.auth().currentUser.uid;

    firebase.database().ref('/groceries/'+userId).on('value', (snapshot) => {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({items});
     });
}

render() {
    return (
        <View style={styles.container}>
            {
                this.state.items.length > 0
                ? <ItemComponent items={this.state.items} />
                : <Text>No items</Text>
            }
        </View>
    )
}
}
