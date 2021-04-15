import React from 'react';
import { useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';

const ScrollContainer = ({ loading, children, refreshFn }) => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refreshFn();
        setRefreshing(false);
    }

    return <ScrollView
        refreshControl={
            <RefreshControl
                onRefresh={onRefresh}
                refreshing={refreshing}
                tintColor={"white"}
            ></RefreshControl>
        }
        style={{ backgroundColor: "black" }}
        contentContainerStyle={{
            flex: loading ? 1 : 0,
            justifyContent: loading ? "center" : "flex-start"
        }}
    >
        {loading ? <ActivityIndicator color="white"></ActivityIndicator> : children}
    </ScrollView>
}

export default ScrollContainer;