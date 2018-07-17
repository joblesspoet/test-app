import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Logo from '../Logo/Logo';
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  
  _signup(){
    Actions.signup();
  }
  _GoToForgotPasswordPage(){
    Actions.forgotpassword();
  }

  render() {
    return (
      <View style={styles.container}>             
        <Logo/>
        <LoginForm/>
        <TouchableOpacity onPress={this._GoToForgotPasswordPage} style={styles.buttonForgotPassword}>
            <Text style={styles.buttonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Don't have a account yet?</Text>
            <TouchableOpacity onPress={this._signup}>
              <Text style={styles.signupButton}>Signup</Text>
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
  signupTextContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', 
    paddingVertical: 16,   
    flexDirection: 'row'
  },
  signupText:{
    color: 'rgba(255,255,255,0.6)',    
  },
  signupButton:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  buttonForgotPassword:{
    marginVertical:10,    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',    
    textAlign: "center",    
  },
});
