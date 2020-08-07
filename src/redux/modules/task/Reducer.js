import {CREATE_TASK, REMOVE_TASK, UPDATE_TASK} from "../../store/actions";

const initialState = {
    data: []
}

export function tasks(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case CREATE_TASK:
            return {
                ...state,
                data: [...state.data, payload]
            }
        case UPDATE_TASK:
            return {
                ...state,
                data: [...state.data.filter(el => el.id !== payload.id), payload]
            }
        case REMOVE_TASK:
            return {
                ...state,
                data: state.data.filter(el => el.title !== payload)
            }
        default:
            return state;
    }
}

