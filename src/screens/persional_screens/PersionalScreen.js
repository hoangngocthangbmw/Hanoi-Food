import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class PersionalScreen extends Component {

    static navigationOptions = {
        title: 'Cá nhân',
        tabBarIcon: ({ tintColor }) => (
            //   <Image
            //     tintColor={tintColor}
            //     source={require("../../asset/image/personal.png")}
            //   />
            <Icon name="ios-home" size={30} color={tintColor} />
        )
    };

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