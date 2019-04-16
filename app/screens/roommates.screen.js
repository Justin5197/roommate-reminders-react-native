import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import Roommates from '../components/roommates.component';

export default class RoommatesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Become Roommates"
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
