import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Dashboard extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>             
        <Text>Welcome to Dashboard</Text>
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
});
