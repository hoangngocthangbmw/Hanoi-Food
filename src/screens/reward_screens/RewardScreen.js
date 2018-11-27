import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class RewardScreen extends Component {

    static navigationOptions = {
        title: 'Đổi quà',
        tabBarIcon: ({ tintColor }) => (
            // <Image
            //     tintColor={tintColor}
            //     source={require("../../asset/image/reward.png")}
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