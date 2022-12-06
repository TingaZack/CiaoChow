import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

const FirstSlide = () => {
    const navigation = useNavigation();

    const getStarted = async () => {
        console.log('Get started!');
        await AsyncStorage.setItem('ONBOARDED', 'true').then(() => {
            console.log('Token save successfully.');
        }).catch(er => {
            console.log('rrr: ', er.message);
        });
        navigation.navigate('Login');
    };
    useEffect(() => {
        getStorage();
    }), [];

    const getStorage = async () => {
        const onboarded = await AsyncStorage.getItem('ONBOARDED');
    };

    return (
        <View style={styles.container}>
            <View style={styles.ovalShape}>
                <Image
                    style={{
                        width: '100%', resizeMode: 'contain', width: '100%',
                        height: undefined,
                        aspectRatio: 1,
                    }}
                    source={require('../../assets/Ellipseoval.png')}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.topContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                        resizeMode="center"
                    />
                    <View style={styles.manWomanView}>
                        <Image
                            style={{
                                width: 200,
                                height: 300,
                                resizeMode: 'contain',
                                marginRight: -50,
                                aspectRatio: 1,
                            }}
                            source={require('../../assets/woman.png')}
                        />
                        <Image
                            style={{
                                width: 200,
                                resizeMode: 'contain',
                                marginLeft: -50,
                                aspectRatio: 1,
                            }}
                            source={require('../../assets/man.png')}
                        />
                    </View>

                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.promoText}>Hungry? <Text style={{ fontWeight: 'bold' }}>CiaoChow</Text> helps {'\n'} you find something to eat.</Text>
                    <Pressable style={styles.button} onPress={getStarted}>
                        <Text style={styles.innerText}>Get Started</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
};
export default FirstSlide;