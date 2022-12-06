
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
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
        </>
    )
}
export default MainStack;