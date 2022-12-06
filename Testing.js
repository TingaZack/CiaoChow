// import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import DescriptionScreen from './Screens/DescriptionScreen';
import NutritionFactsScreen from './Screens/NutritionFactsScreen';

const Tab = createMaterialTopTabNavigator();

import React, { useRef, useState } from 'react';

// import all the components we are going to use
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// importing Segmented Control Tab
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Swiper from 'react-native-swiper';
import ViewDetailsScreen from './Screens/ViewDetailsScreen';

const Testing = () => {
    // For single select SegmentedControlTab
    const [testArray, setTestArray] = useState([0, 1, 2, 4, 5, 6]);
    const swiper = useRef(null)
    // console.log('Ref: ', ref)
    // let swiper = null;
    // let 
    // onPressPrev = () => {
    //     refs.swiper.scrollBy(-1)
    // }

    const scrollForward = (swiper) => {
        swiper.current.scrollBy(1);
    };
    const scrollBackwards = (swiper) => {
        swiper.current.scrollBy(-1);
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Swiper style={styles.wrapper} ref={swiper} horizontal={false} showsPagination={false}
                    onIndexChanged={idxActive => console.log(idxActive)}>
                    {
                        testArray.map(res => {
                            return (
                                <View style={styles.slides}>
                                    {/* <Text style={styles.text}>Hello {res} Swiper</Text> */}
                                    <ViewDetailsScreen scrollForward={() =>scrollForward(swiper)} scrollBackwards={() =>scrollBackwards(swiper)} />
                                </View>
                            )

                        })
                    }
                    {/* <View style={styles.slides}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slides}>
                        <Text style={styles.text}>And simple</Text>
                    </View> */}
                </Swiper>

                {/* <Button onPress={() => scrollForward(swiper)} title="Hello">Forward</Button> */}
            </View>
        </SafeAreaView>
    )
};
export default Testing;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slides: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'blue'
    },
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        // width,
        flex: 1
    }
});