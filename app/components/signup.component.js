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

@observer
export default class SignUp extends Component {
  @observable firstName = '';
  @observable lastName = '';
  @observable phoneNumber = '';
  @observable email = '';
  @observable password = '';

  constructor(props) {
    super(props);
  }

  signUp() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    auth.signUp({email: this.email, password: this.password})
      .then(() => {
        navigate('Login')
      })
  }

  render() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation

    return(
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='First Name'
            placeholderTextColor="#fff"
            onChangeText={(firstName) => this.firstName = firstName}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Last Name'
            placeholderTextColor="#fff"
            onChangeText={(lastName) => this.lastName = lastName}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Phone Number'
            placeholderTextColor="#fff"
            onChangeText={(phoneNumber) => this.phoneNumber = phoneNumber}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Input style={{color: "#fff"}}
            placeholder='Email'
            placeholderTextColor="#fff"
            onChangeText={(email) => this.email = email}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#fff"}} name='lock-open' />
          <Input style={{color: "#fff"}}
            placeholder='Password'
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(pass) => this.password = pass}/>
        </Item>
        <Button rounded block style={{marrginBottom: 10}}
          onPress={this.signUp.bind(this)}>
          <Text>Sign Up</Text>
        </Button>
      </Form>
    )
  }
}
