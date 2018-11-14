import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class GroupTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> GroupTab </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 700,
        backgroundColor: 'red',
        marginTop: 8
    }
})