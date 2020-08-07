import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./src/screen/HomeScreen";
import TodoScreen from "./src/screen/TodoScreen";
import {Router} from "./src/utils/Router";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from "./src/redux/store";
import {ActivityIndicator, View} from "react-native";

const Stack = createStackNavigator();
console.disableYellowBox = true

function App() {

    const renderLoading = <View><ActivityIndicator size="large"/></View>;
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PersistGate loading={renderLoading} persistor={persistor}>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {
                            backgroundColor: '#03A9F4',
                        },
                        headerTitleStyle: {
                            color: 'white'
                        },
                    }}
                    >
                        <Stack.Screen name={Router.home} component={HomeScreen}/>
                        <Stack.Screen name={Router.todo} component={TodoScreen}/>
                    </Stack.Navigator>
                </PersistGate>
            </Provider>
        </NavigationContainer>
    );
}

export default App;
