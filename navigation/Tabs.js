import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import Movies from '../screens/Movies';

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen component={Movies} name="Movies"></Tabs.Screen>
            <Tabs.Screen component={Tv} name="Tv"></Tabs.Screen>
            <Tabs.Screen component={Search} name="Search"></Tabs.Screen>
            <Tabs.Screen component={Favs} name="Favs"></Tabs.Screen>
        </Tabs.Navigator>
    )
    
}