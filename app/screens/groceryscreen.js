// ListItem.js

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import GroceryComponent from '../components/grocerycomponent';
import firebase from 'firebase';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B6A6BB',
    }
  })

export default class GroceryScreen extends Component {

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
    state = {
        isModalVisible: false
      }
    
      _showModal = () => this.setState({ isModalVisible: true })
    
      _hideModal = () => this.setState({ isModalVisible: false })
    
      _goToSecondScreen = () => {
        // First, hide the modal
        this._hideModal();
        // Then, navigate to your second screen
        yourNavigationApi.push('AddGroceriesScreen') 
      }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                {
                    this.state.items.length > 0
                    ? <GroceryComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
                <Button
        title="Go to Jane's profile"
        onPress={() => navigate('', {name: 'AddGroceriesScreen'})}
      />
            </View>
        )
    }
}