import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import HomeReducer from './homeReducer';
import {RESET_STORE} from '../../src/actions/types';
import {appDefaultReducer} from "./defaultReducer";

const appReducer = combineReducers({
    user: UserReducer,
    home: HomeReducer,
});

export default function rootReducer(state, action) {
    let finalState = appReducer(state, action);
    if (action.type === RESET_STORE) {
        finalState = appDefaultReducer;//resetReducer(finalState, action);
    }
    return finalState;
}
