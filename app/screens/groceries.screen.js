import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import Groceries from '../components/groceries.component';

export default class GroceriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Here are our grocery list"
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
