import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../../screens/customer/ProfileScreen';

export default function CustomerProfileStack() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator 
            initialRouteName={"ProfileScreen"} 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    );
}