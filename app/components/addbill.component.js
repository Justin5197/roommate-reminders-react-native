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
export default class AddBills extends Component {
  @observable name = '';
  @observable price = '';

  constructor(props) {
    super(props);
  }

  billAdd() {
    const { navigate } = this.props.navigation

    var userId = global.housepinNumber;

    firebase.database().ref('/bills/' + userId).set(
      {
        name: this.name,
        price: this.price
      }
    )
  }

  render() {
    const { navigate } = this.props.navigation

    return(
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Name'
            placeholderTextColor="#fff"
            onChangeText={(name) => this.name = name}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Price'
            placeholderTextColor="#fff"
            onChangeText={(price) => this.price = price}/>
        </Item>

        <Button rounded block style={{marginBottom:   10}}
          onPress={this.billAdd.bind(this)}>
          <Text>Add Bill</Text>
        </Button>
      </Form>
    )
  }
}