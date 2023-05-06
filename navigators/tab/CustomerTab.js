import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerMainStack from '../stacks/customer/Main';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomerProfileStack from '../stacks/customer/Profile';
import CustomerBookingStack from '../stacks/customer/Booking';
import CustomerChatStack from '../stacks/customer/Chat';
import Notification from '../../screens/Notificatation';
import CustomerNotificationStack from '../stacks/customer/Notification';


const CustomerTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                keyboardHidesTabBar: true,
                tabBarActiveTintColor: "#0088E0",
                tabBarInactiveTintColor: "black",
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="Home"
                component={CustomerMainStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Booking"
                component={CustomerBookingStack}
                options={{
                    tabBarLabel: 'Booking',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar-clock-outline" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Notification"
                component={CustomerNotificationStack}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="bell" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Inbox"
                component={CustomerChatStack}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="message1" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={CustomerProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle-outline" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default CustomerTab