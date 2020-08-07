import {combineReducers} from 'redux';
import {tasks} from '../modules/task/Reducer'

const rootReducer = combineReducers({
    tasks,
});

export default rootReducer;
