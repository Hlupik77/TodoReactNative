import React, {useLayoutEffect} from 'react';
import {Text, View} from "react-native";

const TodoScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Создать',
        });
    }, [navigation]);
    return (
        <View>
            <Text > Test</Text>
        </View>
    );
};

export default TodoScreen;
