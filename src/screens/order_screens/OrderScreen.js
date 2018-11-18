import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import R from '../../res/R';
import Header from '../../components/Header';
import ListFoodHorizontal from './ContainerHorizontal';
import SlideOder from './SlideOrder';
import GroupTab from './GroupTab';

export default class OrderScreen extends Component {

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
