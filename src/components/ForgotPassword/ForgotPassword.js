import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Logo from '../Logo/Logo';
import ForgotPasswordForm from './ForgotPasswordForm';
import { Actions } from 'react-native-router-flux';

export default class ForgotPassword extends React.Component {
    
    _signin(){
        Actions.pop();
    }
  render() {
    return (
      <View style={styles.container}>             
        <Logo/>
        <ForgotPasswordForm/>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Back to</Text>
            <TouchableOpacity onPress={this._signin}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9800',
  },
  loginTextContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', 
    paddingVertical: 16,   
    flexDirection: 'row'
  },
  loginText:{
    color: 'rgba(255,255,255,0.6)',    
  },
  loginButton:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 5,
  }
});
