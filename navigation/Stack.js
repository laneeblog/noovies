import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => {
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderBottomColor: "black",
                    shadowColor: "black"
                },
                gestureEnabled: true,
                headerTintColor: "white",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen component={Tabs} name="Tab" />
            <Stack.Screen component={Detail} name="Detail" />
        </Stack.Navigator>
    )    
}
