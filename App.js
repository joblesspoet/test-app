import React from 'react';
import { StyleSheet,View,StatusBar } from 'react-native';

import Routes from './src/Routes';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}> 
        <StatusBar            
            backgroundColor="#c66900"
            barStyle="light-content"
        />
        <Routes />
      </View>           
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff9800',
    flex: 1,    
  },
});
