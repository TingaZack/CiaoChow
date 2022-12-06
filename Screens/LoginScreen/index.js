import { Image, KeyboardAvoidingView, Pressable, ScrollView, Text, View } from "react-native";
import LoginInputs from "../../components/LoginInputs";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate('Register', {
            params: navigation
        });
    };

    return (
        <KeyboardAvoidingView style={{ height: '100%', flex: 6, }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 6, height: '100%' }}>
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
                            }}>Login</Text>
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
                                    source={require('../../assets/man.png')}
                                />
                            </View>

                        </View>
                        <View style={styles.bottomContainer}>
                            <LoginInputs />
                            <Text style={{ color: '#4CAD73' }}>Don't have an account? <Text style={{ fontWeight: "bold" }} onPress={goToRegister}>Register</Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >

    )
};
export default Login;