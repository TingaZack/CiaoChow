import { Formik } from 'formik';
import { Button, Text, TextInput, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import * as yup from 'yup'
import styles from './styles';
import axios from 'axios';

const RegisterInputs = () => {
    const loginValidationSchema = yup.object().shape({
        username: yup
            .string()
            .required('Username is Required'),
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    });

    const submitRegister = async (values) => {
        try {
            // axios.post('http://192.168.43.35:1337/api/auth/local/register', {
            axios.post('https://ciaochow.plusnarrative.biz/api/auth/local/register', {
                username: values.username,
                email: values.email,
                password: values.password,
            }).then(async (response) => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                // console.log('User token', response.data.jwt);
                await AsyncStorage.setItem('token', response.data.jwt);
            }).catch(error => {
                console.log('An error occurred:', error.response);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '', username: '' }}
            onSubmit={values => submitRegister(values)}
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
                        <Text style={styles.inputText}>username</Text>
                        <TextInput
                            name="username"
                            placeholder="Username"
                            style={styles.input}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            keyboardType="default"
                        />
                        {errors.username &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.username}</Text>
                        }
                    </View>

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
                            placeholder="***********"
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

                    <Pressable style={styles.button} disabled={!isValid} onPress={handleSubmit}>
                        <Text style={styles.innerText}>Register</Text>
                    </Pressable>
                </>
            )}
        </Formik>
    )
};
export default RegisterInputs;