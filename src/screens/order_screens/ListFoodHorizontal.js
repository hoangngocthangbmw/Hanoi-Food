import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ListFoodHorizontal extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> ListFoodHorizontal </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    height: 200,
    marginTop: 8
  }
})