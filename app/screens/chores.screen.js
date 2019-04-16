import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import Chores from '../components/chores.component';

export default class ChoresScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: ""
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
