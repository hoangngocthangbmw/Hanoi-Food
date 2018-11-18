import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import HighlightTab from '../order_screens/HighlightTab';
import NearTab from '../order_screens/NearTab';
import GoodPrice from '../order_screens/GoodPriceTab';
import R from '../../res/R';


export default class GroupTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'highlight', title: R.strings.order.text_highlight_tab },
                { key: 'near', title: R.strings.order.text_near_tab },
                { key: 'goodprice', title: R.strings.order.text_good_price }
            ],
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        highlight: HighlightTab,
                        near: NearTab,
                        goodprice: GoodPrice,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 700,
        backgroundColor: 'red',
        marginTop: 8
    },

    scene: {
        flex: 1,
    },
})