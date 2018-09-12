import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FileList from './components/FileList';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View>
        <FileList />
      </View>
    );
  }
}

export default App;
