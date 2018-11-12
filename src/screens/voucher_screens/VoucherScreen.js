import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { getVouchers } from '../../api/voucher';

export default class VoucherScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
   async componentDidMount() {
       await getVouchers().then((res) => {
            console.log('vorcher', res)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> VoucherScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
