import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import R from '../res/R';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.imageSearch} source={require('../asset/image/search.png')} resizeMode="contain" />
                </View>

                <TextInput
                    style={styles.textInput}
                    placeholder={R.strings.header.text_search}
                />
                <View style={{ padding: 8, alignItems: 'center' }}>
                    <Image style={styles.imageNotification} source={require('../asset/image/notification.png')} resizeMode="contain" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    imageSearch: {
        flex: 1,
        marginLeft: 16,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: R.colors.grey100,
    },

    textInput: {
        marginRight: 8,
        marginTop: 8,
        marginBottom: 8,
        flex: 8,
        backgroundColor: R.colors.grey100,
    },

    imageNotification: {
        flex: 1
    }

})
