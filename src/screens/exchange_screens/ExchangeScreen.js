import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class ExchangeScreen extends Component {

    static navigationOptions = {
        title: 'Giao dịch',
        tabBarIcon: ({ tintColor }) => (
            // <Image
            //     tintColor={tintColor}
            //     source={require("../../asset/image/exchange.png")}
            // />
            <Icon name="ios-home" size={30} color={tintColor} />
        )
    };

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