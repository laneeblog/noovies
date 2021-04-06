import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Tabs} name="Tabs" />
            <Stack.Screen component={Detail} name="Detail" />
        </Stack.Navigator>
    )    
}
