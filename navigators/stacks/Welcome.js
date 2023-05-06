import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import Splash1 from '../../screens/Splash1';
import Splash2 from '../../screens/Splash2';
import SignupChoice from '../../screens/SignupChoice';
import Signup from '../../screens/Signup';
import EmailLogin from '../../screens/EmailLogin';
import OTPVerification from '../../screens/OTPVerification';
import MainScreen from '../../screens/MainScreen';
import SearchScreen from '../../screens/SearchScreen';

export default function App() {
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Splash1" component={Splash1} />
                <Stack.Screen name="Splash2" component={Splash2} />
                <Stack.Screen name="SignupChoice" component={SignupChoice} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="EmailLogin" component={EmailLogin} />
                <Stack.Screen name="OTPVerification" component={OTPVerification} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}