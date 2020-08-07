import React, {useLayoutEffect, useState} from 'react';
import {View, TextInput, Button, Alert} from "react-native";
import {useDispatch} from "react-redux";
import {TASK_ACTIONS} from "../redux/modules/task/Action";
import { useNavigation } from '@react-navigation/native';

const TodoScreen = ({route}) => {
    const defaultData = {
        id: Date.now(),
        title: '',
        description: ''
    }
    const { currentTask } = route.params;
    const taskData = currentTask || defaultData
    const taskAction = currentTask ? 'Update' : 'Create'

    const navigation = useNavigation()

    const [task, setTask] = useState(taskData)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Создать',
        });
    }, [navigation]);

    const changeTitle = title => {
        setTask(prevState => ({...prevState, title}))
    }

    const changeDescription = description => {
        setTask(prevState => ({...prevState, description}))
    }

    const saveTask = () => {
        if (currentTask) {
            dispatch(TASK_ACTIONS.updateTask(task))
        } else {
            dispatch(TASK_ACTIONS.createTask(task))
        }
        navigation.goBack()
    }

    return (
        <View>
            <TextInput
                name='title'
                placeholder={"Title"}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 4,
                    borderRadius: 12,
                    margin: 16,
                }}
                onChangeText={changeTitle}
                defaultValue={taskData.title}
            />
            <TextInput
                name='description'
                placeholder={"Description"}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 4,
                    borderRadius: 12,
                    margin: 16,
                }}
                onChangeText={changeDescription}
                defaultValue={taskData.description}
            />
            <View style={{margin: 16}}>
                <Button title={taskAction} onPress={saveTask}/>
            </View>
        </View>
    );
};

export default TodoScreen;
