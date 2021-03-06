import React, { Component } from 'react';
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
export default class Login extends Component {
  @observable email = '';
  @observable password = '';

  constructor(props) {
    super(props)
  }

  signIn() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    auth.signIn({email: this.email, password: this.password})
      .then(() => {
        var userid = firebase.auth().currentUser.uid;
        var ref = firebase.database().ref('/users/'+userid).once("value",snapshot => {
          if (snapshot.hasChild('none')){
            navigate('Login')
          }
          else{
            global.housePinNumber = this.housePIn;
            navigate('SetHousehold')
          }
        })
      })
  }
  render() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    return (
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#fff"}} name='person-outline' />
          <Input style={{color: "#fff"}}
            placeholder='Please Enter Email'
            placeholderTextColor="#fff"
            onChangeText={(email) => this.email = email}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#fff"}} name='lock-open' />
          <Input style={{color: "#fff"}}
            placeholder='Please Enter Password'
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(pass) => this.password = pass}/>
        </Item>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.signIn.bind(this)}>
          <Text>Login</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('SignUp')}>
          <Text>Sign Up</Text>
        </Button>
      </Form>
    )
  }
}
