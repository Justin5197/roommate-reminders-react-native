import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native'
import Bills from '../components/bills.component';
import firebase from 'firebase';

export default class BillsScreen extends Component {
  state = {
    items: []
  }

  componentDidMount() {
      var userId = global.housepinNumber;;
      firebase.database().ref('/bills/'+userId).on('value', (snapshot) => {
          let data = snapshot.val();
          let items = Object.values(data);
          this.setState({items});
       });
  }

  render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>
              {
                  this.state.items.length > 0
                  ? <Bills items={this.state.items} />
                  : <Text>No items</Text>
              }
              <Button
      title="Add Bills"
      onPress={() => navigate('AddBills')}
    />
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B6A6BB',
    }
  });
