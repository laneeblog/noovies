import React, { useEffect, useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import Movies from '../screens/Movies';
import { Ionicons } from '@expo/vector-icons';


const Tabs = createBottomTabNavigator();

const getHeaderName = route => route?.state?.routeNames[route.state.index] || "Movies";

export default ({ navigation, route }) => {

    useLayoutEffect(() => { // useEffect도 잘 되긴 함
        const name = getHeaderName(route)
        navigation.setOptions({
            title: name
        });
    }, [route])

    return (
        <Tabs.Navigator
            screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused}) => {
                        let iconName;
                        if(route.name === "Movies") {
                            iconName = "film";
                        }else if(route.name === "Tv") {
                            iconName = "tv";
                        }else if(route.name === "Search") {
                            iconName = "search";
                        }else if(route.name === "Favs") {
                            iconName = "heart";
                        }
                        return <Ionicons name={iconName} color={focused ? "white" : "grey"} size={26}></Ionicons>
                    }
                })
            }
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black"
                }
            }}
        >
            <Tabs.Screen component={Favs} name="Favs"></Tabs.Screen>
            <Tabs.Screen component={Movies} name="Movies"></Tabs.Screen>
            <Tabs.Screen component={Tv} name="Tv"></Tabs.Screen>
            <Tabs.Screen component={Search} name="Search"></Tabs.Screen>
        </Tabs.Navigator>
    )

}