import React from 'react';
import { StyleSheet, Text, View, ScrollView,
  TextInput,TouchableOpacity,
  Picker

} from 'react-native';


export default class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={pickerDefaultText: "Please select a country",
      selectedCountry:null,
      selectedState:null,
      selectedCity:null,

    };
  }
  render() {
    return (
      <View>
      <ScrollView >   
      <View style={styles.container}>          
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Name"
          placeholderTextColor="#ffffff"            
        />
        <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            placeholderTextColor="#ffffff"            
        />
        <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}            
        />
        <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Confirm Password"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}            
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="School/Organization Name"
          placeholderTextColor="#ffffff"            
        />
        <View style={styles.dropDown}>
          <Picker style={styles.dropDownStyle}
            selectedValue={this.state.selectedCountry ? this.state.selectedCountry : 0}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedCountry: itemValue})}
            >            
            <Picker.Item label="Please select a country" value="0" />
            <Picker.Item label="Pakistan" value="1" />
            <Picker.Item label="India" value="2" />
          </Picker>
        </View>
        <View style={styles.dropDown}>
          <Picker style={styles.dropDownStyle}
            selectedValue={this.state.selectedState ? this.state.selectedState : 0}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedState: itemValue})}
          >
            <Picker.Item label="Please select a state" value="0" />
            <Picker.Item label="Punjab" value="1" />
            <Picker.Item label="KPK" value="2" />
          </Picker>
        </View>
        <View style={styles.dropDown}>
          <Picker style={styles.dropDownStyle}
            selectedValue={this.state.selectedCity ? this.state.selectedCity : 0}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedCity: itemValue})}
          >
            <Picker.Item label="Please select a city" value="0" />
            <Picker.Item label="Lahore" value="1" />
            <Picker.Item label="Sangla Hill" value="2" />
          </Picker>        
        </View>
      </View>        
      </ScrollView>     
      <View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    color: "#ffffff",
    marginVertical: 5
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
  dropDown:{
    width: 300,
    marginVertical: 10,              
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',    
  },
  dropDownStyle:{
    color: '#fff'
  }
});
