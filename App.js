import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./src/screen/HomeScreen";
import TodoScreen from "./src/screen/TodoScreen";
import {Router} from "./src/utils/Router";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
}

export default App;
