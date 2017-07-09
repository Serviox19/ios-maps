import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Map from './src/components/Map';

class App extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Header
          headerText="App"
        />
        <Map />
      </View>
    );
  }
}


export default App;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column'
  }
});
