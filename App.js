import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TabsComponent from './components/TabsComponent';
import Login from './Screens/LoginScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import Register from './Screens/Register';
import ViewDetailsScreen from './Screens/ViewDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import DescriptionScreen from './Screens/DescriptionScreen';
import NutritionFactsScreen from './Screens/NutritionFactsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function App({ nav }) {

  const [onboarded, setOnboarded] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    getStorage();
  }, []);

  const getStorage = async () => {
    const onboardedd = await AsyncStorage.getItem('ONBOARDED');
    const token = await AsyncStorage.getItem('token');
    setToken(token);
    console.log('Onboarded Token: ', token, onboarded);
    // setOnboarded(JSON.parse(onboarded));

    if (onboardedd) {
      setOnboarded(true);
      // console.log('====================================');
      // console.log('The user has been onbaorderd');
      // console.log('====================================');
    } else {
      setOnboarded(false)
      // console.log('====================================');
      // console.log('The user has not ');
      // console.log('====================================');
    }
  };

  return (

    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={onboarded? 'Login' : 'Onboarding'}> */}
      {!onboarded ?
        <Stack.Navigator initialRouteName={'Onboarding'}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
        :
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

          && token ?

          <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{
              headerTransparent: true, headerTitle: '', headerLeft: (props) => (
                <TouchableOpacity
                  onPress={() => nav.goBack()}
                >
                  <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>
              )
            }} />
          </Stack.Navigator>
          :
          <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{
              headerTransparent: true, headerTitle: '', headerLeft: (props) => (
                <TouchableOpacity
                  onPress={() => nav.goBack()}
                >
                  <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>
              )
            }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          </Stack.Navigator>

      }

    </NavigationContainer >

    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName='Settings'
    //     screenOptions={({ route }) => ({
    //       headerShown: false,
    //       tabBarActiveTintColor: '#00ff00',
    //       tabBarInactiveTintColor: '#ff0000',
    //     })}>
    //     <Tab.Screen name="Home" component={DescriptionScreen} />
    //     <Tab.Screen name="Settings" component={NutritionFactsScreen}/>
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <Testing />
    // <ViewDetailsScreen />
    //   // <View>
    // <OnboardingScreen />
    // {/* <Register /> */ }
    // {/* <Login /> */ }
    // {/* <ViewDetailsScreen /> */ }
    // <TabsComponent />
    // {/* <StatusBar style="auto" /> */ }
    // {/* </View> */ }
    // <Testing />

  );
};

export default (App);
