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
export default class CreateHousehold extends Component {
  @observable groupName = '';
  @observable housePIN = '';

  constructor(props) {
    super(props);
  }

  createHouse() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation

    var userId = firebase.auth().currentUser.uid

    firebase.database().ref('/households/' + housePIN).set(
      {
        admins: {
          id: userId
        },
        groupName: this.groupName,
        housePIN: this.housePIN,
        roommates: {
          id: userId
        }
      }
    )
    .then(() =>  {
      navigate('SetHousehold')
    })
  }

  render() {
    return (
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='House Name'
            placeholderTextColor="#fff"
            onChangeText={(groupName) => this.groupName = groupName}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='5 digit House PIN'
            placeholderTextColor="#fff"
            onChangeText={(housePIN) => {
              this.housePIN = housePIN,
              global.housepinNumber = housePIN
            }
            }
              />
        </Item>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.createHouse.bind(this)}>
          <Text>Create Household</Text>
        </Button>
      </Form>
    )
  }
}
