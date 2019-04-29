import React, {Component} from 'react'
import {
  Button,
  Item,
  Input,
  Icon,
  Text,
  Form
} from 'native-base';
import{
  AlertIOS
}
from 'react-native'
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';
import firebase from 'firebase';


@observer
export default class AddBills extends Component {
  @observable name = '';
  @observable amount = '';

  constructor(props) {
    super(props);
  }
  addBill() {
    var userId = global.housepinNumber;
  
    firebase.database().ref('/bills/'+userId).push({
      name: this.name,
      amount: this.amount
  });
  // AlertIOS.alert(
  //   'Item saved successfully'
  //  );
  }
  

  render() {
    return(
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Enter The Bill Name'
            placeholderTextColor="#fff"
            onChangeText={(name) => this.name = name}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Bill Amount'
            placeholderTextColor="#fff"
            onChangeText={(amount) => this.amount = amount}/>
        </Item>
        <Button rounded block style={{marginBottom:   10}}
          onPress={this.addBill.bind(this)}>
          <Text>Add Bill</Text>
        </Button>
      </Form>
    )
  }
}