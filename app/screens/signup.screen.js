import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import SetHousehold from '../components/signup.component';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Sign Up"
    };
  }
  render() {
    return (
      <Text style={styles.titleText}>
        {this.state.titleText}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
