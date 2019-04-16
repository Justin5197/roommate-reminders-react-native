import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import AddEvent from '../components/addevent.component';

export default class BillsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "User can add the events"
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
