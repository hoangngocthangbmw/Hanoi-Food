import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class NearTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> NearTab </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})