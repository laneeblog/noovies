import React from 'react';
import { ScrollView } from 'react-native';
import Title from './Title';

export default ({ title, children }) => (
    <>
        <Title title={title}></Title>
        <ScrollView
            style={{ marginTop: 10, marginBottom: 40 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 10 }}
        >
            {children}
        </ScrollView>
    </>
)