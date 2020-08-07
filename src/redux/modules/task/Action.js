import {CREATE_TASK, REMOVE_TASK, UPDATE_TASK} from "../../store/actions";

const createTask = task => ({
    type: CREATE_TASK,
    payload: task
})

const updateTask = task => ({
    type: UPDATE_TASK,
    payload: task
})

const removeTask = id => ({
    type: REMOVE_TASK,
    payload: id
})

export const TASK_ACTIONS = {
    createTask,
    updateTask,
    removeTask,
}
