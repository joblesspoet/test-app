import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

class DrawerContent extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>                
        <Button title="Home" onPress={() => { console.log('home')}} />
        <Button title="Routes" onPress={() => { console.log('Routes')}} />
        <Button title="Drivers" onPress={() => { console.log('Drivers')}} />
        <Button title="Realtime" onPress={() => { console.log('Realtime')}} />
        <Button title="Histor" onPress={() => { console.log('History')}}/>       
      </View>
    );
  }
}

export default DrawerContent;