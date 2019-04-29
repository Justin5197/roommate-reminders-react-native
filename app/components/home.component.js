import React, {Component} from 'react'
import {
  Button,
  Item,
  Input,
  Icon,
  Text,
  Form
} from 'native-base';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';

@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    return (
      <Form>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('Bills')}>
          <Text>Bills</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('Calendar')}>
          <Text>Calendar</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('Chores')}>
          <Text>Chores</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('Groceries')}>
          <Text>Groceries</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('EditProfile')}>
          <Text>Edit Profile</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={() => navigate('Roommates')}>
          <Text>Roommates</Text>
        </Button>
      </Form>
    )
  }
}
