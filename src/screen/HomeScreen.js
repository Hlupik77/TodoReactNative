import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {Icon, Input, ListItem} from "react-native-elements";
import {Router} from "../utils/Router";

const HomeScreen = ({ navigation }) => {
    const [item, changeItem] = useState('')
    const [list, changeList] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Задачи',
            headerRight: (props) => <Icon
                onPress={() => navigation.navigate(Router.todo)}
                color={'#fff'}
                name='add' />
        });
    }, [navigation]);

    const onPress = () => {
        const newList = [...list, item]
        changeList(newList)
        changeItem('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Input value={item} onChangeText={changeItem} placeholder='Add new task'
                       leftIcon={
                           <Icon
                               name='search'
                               size={24}
                           />
                       }
                />
            </View>
            {
                list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item}
                        bottomDividet
                        chevron
                    />
                ))
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
