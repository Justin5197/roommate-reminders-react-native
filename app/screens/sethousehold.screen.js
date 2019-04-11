import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import SetHousehold from '../components/sethousehold.component';

export default class SetHouseholdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Set Up Household"
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
