import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class PersionalScreen extends Component {

    static navigationOptions = {
        tabBarLable: 'Cá nhân',
        tabBarIcon: ({ }) => (
            <Image source={require('../../asset/image/personal.png')} />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onClick = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._onClick}> PersionalScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})