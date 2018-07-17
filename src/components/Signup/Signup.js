import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import SignupLogo from '../Logo/SignupLogo';
import SignupForm from './SignupForm';
import { Actions } from 'react-native-router-flux';

export default class Signup extends React.Component {
  _signin(){
    Actions.pop();
  }
  render() {
    return (
      <View style={styles.container}>            
        <SignupForm/>        
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
  signinTextContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', 
    paddingVertical: 16,   
    flexDirection: 'row'
  },
  signinText:{
    color: 'rgba(255,255,255,0.6)',    
  },
  signinButton:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 5,
  }
});
