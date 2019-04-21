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
  @observable currentEmail = '';
  @observable currentPass = '';
  @observable firstName = '';
  @observable lastName = '';
  @observable phoneNumber = '';
  @observable currentEmail = '';
  @observable newPass = '';
  constructor(props) {
    super(props);
  }
  saveChanges() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation



reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email, currentPassword);
  return user.reauthenticateWithCredential(cred);
}
changePassword = (currentPassword, newPassword) => {
  this.reauthenticate(currentPassword).then(() => {
    var user = firebase.auth().currentUser;
    user.updatePassword(newPassword).then(() => {
      console.log("Password updated!");
    }).catch((error) => { console.log(error); });
  }).catch((error) => { console.log(error); });
}


    var credential = firebase.auth.EmailAuthProvider.credential(
      this.oldEmail,
     this.oldPass
   );

    //user.reauthenticateAndRetrieveDataWithCredential(credential)
  // user.updateEmail(this.newEmail)


    // const { auth } = this.props.stores
    // const { navigate } = this.props.navigation
    //
   auth.saveChanges({email: this.oldEmail, password: this.oldPass})
    //
     var userId = firebase.auth().currentUser.uid;
    //
    firebase.database().ref('/users/' + userId).set()
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
          placeholder='Current Email'
          placeholderTextColor="#fff"
          onChangeText={(oldEmail) => this.oldEmail = oldEmail}/>
      </Item>
      <Item style={{marginBottom: 10}} rounded>
        <Icon style={{color: "#fff"}} name='lock-open' />
        <Input style={{color: "#fff"}}
          placeholder='Current Password'
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
            placeholder='Current Email'
            placeholderTextColor="#fff"
            onChangeText={(newEmail) => this.newEmail = newEmail}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#fff"}} name='lock-open' />
          <Input style={{color: "#fff"}}
            placeholder=' New Password'
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
