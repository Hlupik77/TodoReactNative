import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import {Icon, Input, ListItem} from "react-native-elements";
import {Router} from "../utils/Router";
import {useSelector} from "react-redux";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [textForSearching, searchByText] = useState('')
    const tasks = useSelector(state => state.tasks.data)
    const filteredData = tasks.filter(el => !el.title.search(textForSearching))

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Задачи',
            headerRight: (props) => <Icon
                onPress={() => navigation.navigate(Router.todo, {currentTask: null})}
                color={'#fff'}
                name='add' />
        });
    }, [navigation]);

    const onPressTask = task => {
        navigation.navigate(Router.todo, {currentTask: task});
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Input value={textForSearching} onChangeText={searchByText} placeholder='Add new task'
                       leftIcon={
                           <Icon
                               name='search'
                               size={24}
                           />
                       }
                />
            </View>
            {
                filteredData.length ? filteredData.map((task, i) => {
                    return (
                        <ListItem
                            key={i}
                            title={task.title}
                            subtitle={task.description}
                            bottomDividet
                            chevron
                            onPress={() => onPressTask(task)}
                        />
                    )
                }) : 
                <Text style={{ 
                    width: '100%',
                    textAlign: 'center',
                    padding: 24,
                    fontSize: 32,
                    color: 'rgba(0,0,0,.32)'
                }}>
                    task list not found
                </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color: '#fff'
    },
    search: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default HomeScreen
