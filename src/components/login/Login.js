import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends React.Component {
  static navigationOptions = { title: 'Welcome', header: null };


  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <StatusBar backgroundColor="#1e89db"/>
            <Image
              source = {require('../../../images/logo.png')}
              style = {styles.logo}>
            </Image>
            <Text style = {styles.title}>Добро пожаловать!</Text>
            <Text style = {styles.titleLower}>Введите код для авторизации</Text>
          </View>

          <View style = {styles.formContainer}>
            <LoginForm navigation={this.props.navigation}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#1e89db'
  },
  logoContainer : {
    flexGrow : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  logo : {
    width : 120,
    height : 120
  },
  title : {
    color : '#fff',
    marginBottom : 10,
    fontSize : 22
  },
  titleLower : {
    color : '#fff',
    marginTop : 5,
    fontSize : 12
  }
});
