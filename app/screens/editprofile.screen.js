import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import EditProfile from '../components/editprofile.component';

export default class BillsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Here we can edit the profile"
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
