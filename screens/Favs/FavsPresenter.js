import React from 'react';
import { useState } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../../api';


const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
    flex: 1;
    background-color: black;
    align-items: center;

`;
const styles = {
    top: 50,
    height: HEIGHT / 1.5,
    width: "85%",
    position: "absolute"
}
const Poster = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 20px;
`;


export default ({ results }) => {

    const [topIndex, setTopIndex] = useState(0);
    const nextCard = () => setTopIndex(topIndex + 1)
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy });
        },
        onPanResponderRelease: (evt, {dx, dy}) => {
            //position.setValue({ x: 0, y: 0 }); 이렇게 해도 되지만
            if(dx >= 170) {
                Animated.spring(position, {
                    toValue: {
                        x: WIDTH + 100, y: 0
                    },
                    useNativeDriver: true,
                }).start(nextCard)
            }else if(dx < -170) {
                Animated.spring(position, {
                    toValue: {
                        x: -WIDTH - 100, y: 0
                    },
                    useNativeDriver: true,
                }).start(nextCard)
            }else {
                Animated.spring(position, {
                    toValue: {
                        x: 0, y: 0
                    },
                    useNativeDriver: true,
                }).start()
            }            
        }
    })
    const rotationValues = position.x.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: ["-5deg", "0deg", "5deg"],
        extrapolate: "clamp" // 범위 초과 시 중단
    })
    const secondCardOpacity = position.x.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: [1, 0.2, 1],
        extrapolate: "clamp" 
    })
    const secondCardScale = position.x.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: [1, 0.7, 1],
        extrapolate: "clamp" 
    })


    return (
        <Container>
            {results.map((result, index) => {
                if(index < topIndex) {  // 버려진 카드는 다시 렌더 안 되게
                    return null;
                }else if (index === topIndex) {   // 맨 위 카드
                    return <Animated.View
                        key={result.id}
                        {...panResponder.panHandlers}
                        style={{
                            ...styles,
                            zIndex: 1,
                            transform: [{rotate: rotationValues}, ...position.getTranslateTransform()]
                        }}
                    >
                        <Poster source={{ uri: apiImage(result.poster_path) }}></Poster>
                    </Animated.View>
                } else if(index === topIndex + 1) {                    // 깔린 카드
                    return <Animated.View
                        key={result.id}
                        {...panResponder.panHandlers}
                        style={{
                            ...styles,
                            zIndex: -index,
                            opacity: secondCardOpacity,
                            transform: [
                                {scale: secondCardScale}
                            ]
                        }}
                    >
                        <Poster source={{ uri: apiImage(result.poster_path) }}></Poster>
                    </Animated.View>
                }else {
                    return <Animated.View
                        key={result.id}
                        {...panResponder.panHandlers}
                        style={{
                            ...styles,
                            zIndex: -index,
                            opacity: 0
                        }}
                    >
                        <Poster source={{ uri: apiImage(result.poster_path) }}></Poster>
                    </Animated.View>
                }



            })}
        </Container>
    )

}