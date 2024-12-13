import { Text, View } from "react-native"
import HomeScreen from "./component/review/home"
import DetailScreen from "./component/review/detail"
import AboutScreen from "./component/review/about"

import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from "react"
import { OPENSANS_REGULAR } from "./utils/const"

import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from "@react-navigation/drawer"

SplashScreen.preventAutoHideAsync();
const App = () => {
    const [loaded, error] = useFonts({
        [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    type RootStackParamList = {
        Home: undefined;
        Details: undefined;
        // Feed: { sort: 'latest' | 'top'} | undefined;
    }

    const Stack = createNativeStackNavigator<RootStackParamList>();
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Màn hình chính',
                    }} />
                <Stack.Screen
                    name="Details"
                    component={DetailScreen}
                    options={{
                        title: 'Chi tiết review',
                    }} />
            </Stack.Navigator> */}

            <Drawer.Navigator>
                <Drawer.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title: 'Trang chủ',
                }} />
                <Drawer.Screen 
                name="About" 
                component={AboutScreen}
                options={{
                    title: 'Thông tin',
                }} />
            </Drawer.Navigator>

        </NavigationContainer>
    )
}
export default App