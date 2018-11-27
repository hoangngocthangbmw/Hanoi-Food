import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import R from '../../res/R';
import Header from '../../components/Header';
import ListFoodHorizontal from './ContainerHorizontal';
import SlideOder from './SlideOrder';
// import GroupTab from '../order_screens/GroupTab';
import Icon from 'react-native-vector-icons/Ionicons';
import TabTest from './TabTest';

export default class OrderScreen extends Component {

    static navigationOptions = {
        title: 'Đặt món',
        tabBarIcon: ({ tintColor }) => (
            // <Image
            //     tintColor={tintColor}
            //     source={require("../../asset/image/order.png")}
            // />
            <Icon name="ios-home" size={30} color={tintColor} />
        )
    };

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
                    <TabTest />
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
