import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import {
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Form,
  Button,
  Text
} from 'react-native';
import { inject } from 'mobx-react';
import Home from '../components/home.component'

@inject("stores")
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {stores} = this.props
    return (
      <Container>
        <View style={styles.container}>
          <Content scrollEnabled={false}>
            <ImageBackground style={styles.loginBackground} source={stores.config.loginBG}>
              <View style={styles.loginForeground}>
                <Home {...this.props}/>
              </View>
            </ImageBackground>
          </Content>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBackground: {
    flex: 1,
    width: null,
    height: null
  },
  loginForeground: {
    flex: 1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 0,
    paddingBottom : Dimensions.get('window').height/3.4
  }
})