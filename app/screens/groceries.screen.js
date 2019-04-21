import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Groceries from '../components/groceries.component';

export default class GroceriesScreen extends Component {
 /* constructor(props) {
    super(props);
    this.state = {
      titleText: "Here are our grocery list"
    };
  }*/
  static propTypes = {
    items: PropTypes.array.isRequired
  };

render() {
  return (
    <View style={styles.itemsList}>
      {this.props.items.map((item, index) => {
          return (
              <View key={index}>
                  <Text style={styles.itemtext}>{item.name}</Text>
              </View>
          )
      })}
    </View>
  );
}
  
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
