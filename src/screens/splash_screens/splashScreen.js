import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> SplashScreen </Text>
      </View>
    );
  }
}
