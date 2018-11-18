import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HighlightTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> HighlightTab </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})