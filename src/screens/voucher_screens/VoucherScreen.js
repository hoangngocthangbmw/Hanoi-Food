import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { getVouchers } from '../../api/voucher';
import Icon from 'react-native-vector-icons/Ionicons';
export default class VoucherScreen extends Component {

    static navigationOptions = {
        title: 'Voucher',
        tabBarIcon: ({ tintColor }) => (
            //   <Image
            //     tintColor={tintColor}
            //     source={require("../../asset/image/voucher.png")}
            //   />
            <Icon name="ios-home" size={30} color={tintColor} />
        )
    };

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
