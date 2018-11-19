import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import R from '../../res/R';
import Header from '../../components/Header';
import ListFoodHorizontal from './ContainerHorizontal';
import SlideOder from './SlideOrder';
import GroupTab from './GroupTab';

export default class OrderScreen extends Component {

    static navigationOptions = {
        tabBarLable: 'Đặt món',
        tabBarIcon: ({ }) => (
            <Image source={require('../../asset/image/order.png')} />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // _onClick = () => {
    // this.props.navigation.navigate('Test2');
    // }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header />
                    <SlideOder />
                    <ListFoodHorizontal />
                    <GroupTab />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: R.colors.grey200,
    }
})
