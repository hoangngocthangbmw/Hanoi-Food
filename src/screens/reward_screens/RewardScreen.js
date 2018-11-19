import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class RewardScreen extends Component {

    static navigationOptions = {
        tabBarLable: 'Đổi quà',
        tabBarIcon: ({ }) => (
            <Image source={require('../../asset/image/reward.png')} />
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
                <Text> RewardScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})