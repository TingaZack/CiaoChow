import { Image, Pressable, Text, View } from "react-native";
import LoginInputs from "../../components/LoginInputs";
import RegisterInputs from "../../components/RegisterInputs";
// import LoginInputs from "../../components/LoginInputs";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.ovalShape}>
                <Image
                    style={{
                        width: '110%', resizeMode: 'contain',
                        height: undefined,
                        aspectRatio: 1,
                        marginLeft: -10,
                        // marginRight: -10,
                    }}
                    source={require('../../assets/Ellipseoval.png')}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.topContainer}>
                    <Text style={{
                        left: 0,
                        position: "absolute",
                        marginLeft: 20, marginTop: 90,
                        fontSize: 30,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Register</Text>
                    <View style={styles.manWomanView}>
                        <Image
                            style={{
                                width: 250,
                                height: 300,
                                resizeMode: 'contain',
                                marginRight: -50,
                                aspectRatio: 1,
                                marginBottom: -150,
                                marginLeft: 201,
                                marginRight: 45,
                            }}
                            source={require('../../assets/woman.png')}
                        />
                    </View>

                </View>
                <View style={styles.bottomContainer}>
                    <RegisterInputs />
                    <Text style={{ color: '#4CAD73' }}>Have an account? <Text style={{ fontWeight: "bold" }} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
                </View>
            </View>
        </View>
    )
};
export default Register;