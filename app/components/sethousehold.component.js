import React, {Component} from 'react'
import {
  Button,
  Item,
  Input,
  Icon,
  Text,
  Form
} from 'native-base';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';
import firebase from 'firebase';

@observer
export default class SetHousehold extends Component {
  @observable housePIN = '';

  constructor(props) {
    super(props);
  }

  checkHousePIN() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    //var userId = firebase.auth().currentUser.userId
    var ref = firebase.database().ref('/households/').equalTo(this.housePIN).once("value",snapshot => {
      if (snapshot.exists()){
        const userData = snapshot.val();
        console.log("exists!", userData);
        navigate('Home')


      }
  });
  }

  render() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    return (
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Enter Your Given 5 digit House PIN'
            placeholderTextColor="#fff"
            onChangeText={(housePIN) => {this.housePIN = housePIN, global.housepinNumber = housePIN}}/>
        </Item>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.checkHousePIN.bind(this)}>
          <Text>Enter House</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('CreateHousehold')}>
          <Text>Create New Household</Text>
        </Button>
      </Form>
    )
  }
}
