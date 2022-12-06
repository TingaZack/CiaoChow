import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    )
}
export default OnboardingStack;