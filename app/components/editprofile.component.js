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

export default class EditProfile extends Component {
  @observable oldEmail = '';
  @observable oldPass = '';
  @observable firstName = '';
  @observable lastName = '';
  @observable phoneNumber = '';
  @observable newEmail = '';
  @observable newPass = '';
  constructor(props) {
    super(props);
  }
  saveChanges() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    auth.signIn({email: this.oldEmail, password: this.oldPass})
    var user = firebase.auth().currentUser
    user.updateEmail(this.newEmail)


    // const { auth } = this.props.stores
    // const { navigate } = this.props.navigation
    //
    // auth.saveChanges({email: this.email, password: this.password})
    //
    // var userId = firebase.auth().currentUser.uid;
    //
    // firebase.database().ref('/users/' + userId).set(
    //   {
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     phoneNumber: this.phoneNumber,
    //     email: this.email
    //   }
    // )
    // .then(() => {
    //   navigate('Login')
    // })
  }
  render() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation

    return(
      <Form>
      <Item style={{marginBottom: 10}} rounded>
        <Input style={{color: "#fff"}}
          placeholder='Old Email'
          placeholderTextColor="#fff"
          onChangeText={(oldEmail) => this.oldEmail = oldEmail}/>
      </Item>
      <Item style={{marginBottom: 10}} rounded>
        <Icon style={{color: "#fff"}} name='lock-open' />
        <Input style={{color: "#fff"}}
          placeholder='Old Password'
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(oldPass) => this.oldPass = oldPass}/>
      </Item>
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
            placeholder='New Email'
            placeholderTextColor="#fff"
            onChangeText={(newEmail) => this.newEmail = newEmail}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#fff"}} name='lock-open' />
          <Input style={{color: "#fff"}}
            placeholder='Password'
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(newPass) => this.newPass = newPass}/>
        </Item>
        <Button rounded block style={{marginBottom:   10}}
          onPress={this.saveChanges.bind(this)}>
          <Text>Save Changes</Text>
        </Button>
      </Form>
    )
  }
}
