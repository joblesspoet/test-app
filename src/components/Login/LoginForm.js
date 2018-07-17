import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class LoginForm extends React.Component {

  _goToDashboard(){
    Actions.dashboard();
  }

  render() {
    return (
      <View style={styles.container}>             
        <TextInput style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"       
            onSubmitEditing={()=> this.password.focus()}   
        />
        <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
            ref={(input)=>this.password = input}         
        />
        <TouchableOpacity onPress={this._goToDashboard} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
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
    color: '#fff',    
    textAlign: "center",    
  },
  
});
