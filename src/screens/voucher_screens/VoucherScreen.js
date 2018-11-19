import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

import { getVouchers } from '../../api/voucher';

export default class VoucherScreen extends Component {
   
    static navigationOptions = {
        tabBarLable: 'Voucher',
        tabBarIcon: ({ }) => (
            <Image source={require('../../asset/image/voucher.png')} />
        )
    }

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
