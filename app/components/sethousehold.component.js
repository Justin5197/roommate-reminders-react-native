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

  setHouse() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation


    //var userId = firebase.auth().currentUser.userId
    var ref = firebase.database().ref('/households/');
    console.log(ref.key);
  }

  render() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    return (
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='5 digit House PIN'
            placeholderTextColor="#fff"
            onChangeText={(housePIN) => this.housePIN = housePIN}/>
        </Item>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.setHouse.bind(this)}>
          <Text>Set Household</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('CreateHousehold')}>
          <Text>Create New Household</Text>
        </Button>
      </Form>
    )
  }
}
