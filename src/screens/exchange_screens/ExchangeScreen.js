import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class ExchangeScreen extends Component {

    static navigationOptions = {
        tabBarLable: 'Giao dịch',
        tabBarIcon: ({ }) => (
            <Image source={require('../../asset/image/exchange.png')} />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> ExchangeScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})