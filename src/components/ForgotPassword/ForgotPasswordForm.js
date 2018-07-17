import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';


export default class ForgotPasswordForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>             
        <TextInput style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"                   
        />        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    color: "#ffffff",
    marginVertical: 10
  },  
  button: {
    backgroundColor: '#c66900',    
    marginVertical:10,
    width: 300,    
    paddingVertical: 12,
    borderRadius: 25
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',    
    textAlign: "center",
    
  },

});
