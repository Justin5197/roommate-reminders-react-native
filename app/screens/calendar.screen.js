import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import Calendar from '../components/calendar.component';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "User can see the dates"
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
