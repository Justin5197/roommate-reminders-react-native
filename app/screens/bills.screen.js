import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import Bills from '../components/bills.component';

export default class BillsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Here are our bills"
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
