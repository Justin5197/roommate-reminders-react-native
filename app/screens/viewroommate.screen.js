import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'

import ViewRoommate from '../components/viewroommate.component';

export default class ViewRoommateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "User can view the Roommate"
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
