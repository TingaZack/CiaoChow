import { Formik } from 'formik';
import { Button, Text, TextInput, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import * as yup from 'yup'
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const LoginInputs = () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

    const submitLogin = (values) => {
        // console.log('values: ', values);
        setLoading(true);
        try {
            // axios.post('http://192.168.43.35:1337/api/auth/local/register', {
            axios.post('https://ciaochow.plusnarrative.biz/api/auth/local', {
                identifier: values.email,
                password: values.password,
            }).then(async (response) => {
                // Handle success.
                console.log('Well done!');
                // console.log('User profile', response.data.user);
                // console.log('User token', response.data.jwt);
                await AsyncStorage.setItem('token', response.data.jwt).then(() => {
                    console.log('Token save successfully.');
                    setLoading(false)
                    navigation.navigate('Home');
                });
            }).catch(error => {
                console.log('An error occurred:', error.message);
                setLoading(false)
            });
        } catch (error) {
            console.log(error.message);
            setLoading(false)
        }
    };

    return (
        <>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => submitLogin(values)}

            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (
                    <>
                        <View>
                            <Text style={styles.inputText}>email</Text>
                            <TextInput
                                name="email"
                                placeholder="yourmail@mail.com"
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {errors.email &&
                                <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                            }
                        </View>

                        <View>
                            <Text style={styles.inputText}>password</Text>
                            <TextInput
                                name="password"
                                placeholder="**********"
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            />
                            {errors.password &&
                                <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                            }
                        </View>
                        <View style={{ width: '100%' }}>
                            <Pressable style={styles.forgotPswrdBtn}>
                                <Text style={styles.forgotPswrdText}>Forgot Password</Text>
                            </Pressable>
                        </View>

                        {!loading ? <Pressable style={styles.button} disabled={!isValid} onPress={handleSubmit}>
                            <Text style={styles.innerText}>Login</Text>
                        </Pressable> : <Pressable style={[styles.button, { backgroundColor: 'whitesmoke' }]} disabled={!isValid}>
                            <Text style={[styles.innerText, {color: 'grey'}]}>Loading...</Text>
                        </Pressable>}
                    </>
                )}
            </Formik>
        </>

        // <Formik
        //     initialValues={{ email: 'hello', password: '12333' }}
        //     validate={values => {
        //         const errors = {};
        //         if (!values.email) {
        //             errors.email = 'Required';
        //         } else if (
        //             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //         ) {
        //             errors.email = 'Invalid email address';
        //         }
        //         return errors;
        //     }}
        //     onSubmit={(values) => {
        //         // setTimeout(() => {
        //         console.log(values);
        //         // alert(JSON.stringify(values, null, 2));
        //         // setSubmitting(false);
        //         // }, 400);
        //     }}
        // >
        //     {({ handleChange, handleBlur, handleSubmit, values }) => (
        //         <View>
        //             <TextInput
        //                 onChangeText={handleChange('email')}
        //                 onBlur={handleBlur('email')}
        //                 value={values.email}

        //             />
        //             <TextInput
        //                 onChangeText={handleChange('password')}
        //                 onBlur={handleBlur('password')}
        //                 value={values.password}

        //             />
        //             <Button onPress={handleSubmit} title="Submit" />
        //         </View>
        //     )}
        // </Formik>
    )
};
export default LoginInputs;