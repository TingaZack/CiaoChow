
import React, { useEffect, useRef, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../LoginScreen/styles';
import ViewDetailsScreen from '../ViewDetailsScreen';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const [testArray, setTestArray] = useState([0, 1, 2, 4, 5, 6]);
    const swiper = useRef(null)

    const scrollForward = (swiper) => {
        swiper.current.scrollBy(1);
    };
    const scrollBackwards = (swiper) => {
        swiper.current.scrollBy(0);
    };

    const [foodList, setFoodList] = useState([]);
    useEffect(() => {
        // const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwMjMzOTIwLCJleHAiOjE2NzI4MjU5MjB9.2SLar1gnzigDXvgA6vnUcH0fttxkFmxtJNaTey052hg';
        // console.log(testToken);
        // getStorage();
        getFoodList();

    }, []);

    const getFoodList = async () => {
        try {
            /* Testing my Api */
            // await fetch('http://192.168.43.35:1337/api/restaurants')
            //     .then((response) => response.json())
            //     .then((json) => {
            //         // return console.log(json.data);
            //         setRestautantsList(json.data);
            //         console.log('restaurantsList: ', restaurantsList);
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });

            // const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwMjMzOTIwLCJleHAiOjE2NzI4MjU5MjB9.2SLar1gnzigDXvgA6vnUcH0fttxkFmxtJNaTey052hg';
            // console.log(testToken);

            /* Get the token from the local storage ansd send an http request to the api using the bearer token. */
            const token = await AsyncStorage.getItem('token');
            axios.get('https://ciaochow.plusnarrative.biz/api/chows?populate=*', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(response => {
                console.log('Data: ', response.data.data);
                let arr = response.data.data;
                // randomise the response list
                randomise(arr);
                setFoodList(arr)
            }).catch(error => {
                console.log('An error occurred:', error.response);
            });
        } catch (error) {
            console.error(error);
        }
    };

    /* Randomise the array for intuitivity. */
    function randomise(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {foodList.length != 0 ? <Swiper style={styles.wrapper} loop={true} ref={swiper} horizontal={false} showsPagination={false}
                    onIndexChanged={idxActive => { console.log('idxActive: ', idxActive) }}>
                    {
                        foodList.map((res, idx) => {
                            return (
                                <View style={styles.slides} key={idx}>
                                    <ViewDetailsScreen key={idx} data={res} scrollForward={() => scrollForward(swiper)} scrollBackwards={() => scrollBackwards(swiper)} />
                                </View>
                            )
                        })
                    }
                </Swiper> :
                    <View style={{ height: '100%', width: '100%', backgroundColor: '#4CAD73', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/logo.png')}
                            resizeMode="center"
                        />
                        <Text style={{ fontSize: 20, color: 'white' }}>Loading...</Text>
                    </View>
                }
            </View>
        </SafeAreaView>

    )
};
export default HomeScreen