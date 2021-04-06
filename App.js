import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Image, Text } from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native"
import Stack from './navigation/Stack';

// 이미지 미리 로드
const cacheImages = (images) => images.map(image => {
  if (typeof image == "string") {
    return Image.prefetch(image);
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
});
// 폰트 미리 로드
const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {  // AppLoading의 startAsync / promise를 리턴해야 함
    const images = cacheImages([
      "https://cdn1.vectorstock.com/i/1000x1000/53/05/blue-water-splash-isolated-over-white-vector-10785305.jpg",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]) // 모든 promise를 리턴
  };
  const onFinish = () => setIsReady(true);


  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )
    : (
      <AppLoading
        startAsync={loadAssets}
        onFinish={onFinish}
        onError={console.error}
      />
    );
}





// expo install expo-app-loading 
// expo install expo-asset
// expo install @expo/vector-icons 
// expo add expo-font (외부 폰트도 이 모듈이 있어야 사용할 수 있나 봄)
// 내비게이션
  // npm install @react-navigation/native > 기본
  // expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view    > 엑스포 호환
  // npm install @react-navigation/stack  > 스택내비게이션
  // npm install @react-navigation/bottom-tabs > 탭내비게이션