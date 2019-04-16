import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import AddChore from '../components/addchore.component';

export default class AddChoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "User can add the chores"
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
