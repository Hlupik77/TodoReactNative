import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Input, ListItem} from "react-native-elements";


export default function App() {
    const [item, changeItem] = useState('')
    const [list, changeList] = useState([])

    const onPress = () => {
        const newList = [...list, item]
        changeList(newList)
        changeItem('')
    }

    return (
        <View style={styles.container}>
            <Header centerComponent={{text: 'Заметки', style: styles.header}}/>
            <View style={styles.search}>
                <Input value={item} onChangeText={changeItem} containerStyle={{flex: 0.8}} placeholder='Add new task'/>
                <Button onPress={onPress} containerStyle={{flex: 0.2}} title="ADD"/>
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
