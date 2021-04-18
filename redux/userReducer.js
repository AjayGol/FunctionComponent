import {
    SET_SAFE_AREA_INTENT,
    SET_SAFE_AREA_INTENT_X,
    SET_SAFE_AREA_INTENT_CHAT,
    KEYBOARD_HEIGHT,
    SHOW_ADDRESS_PICKER_POPUP,
    START_LOADING,
    APP_SET_USER_DATA,
    APP_LANGUAGE,
    IS_GOOGLEAUT,
    SET_META_DATA
} from '../actions/types';
import _ from 'lodash';
import {appDefaultReducer} from './defaultReducer';
const INITIAL_STATE = appDefaultReducer.user;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case APP_SET_USER_DATA: {
            return {
                ...state,
                email: action.payload.email,
                password: action.password,
                token: action.payload.token
            };
        }
        case SET_SAFE_AREA_INTENT: {

            return {
                ...state,
                safeAreaInsetsDefault:action.payload,
                safeAreaInsetsData: action.payload
            }
        }
        case SET_SAFE_AREA_INTENT_X : {
            return {
                ...state,
                safeAreaInsetsData: action.payload,
            }
        }
        case SET_SAFE_AREA_INTENT_CHAT : {
            return {
                ...state,
                safeAreaInsetsDataChat: action.payload,
            }
        }
        case KEYBOARD_HEIGHT : {
            return {
                ...state,
                keyboardHeight: action.payload,
            }
        }
        case SHOW_ADDRESS_PICKER_POPUP : {
            return {
                ...state,
                addressPickerPopUp: action.payload,
            }
        }
        case APP_LANGUAGE: {
            return {
                ...state,
                appLanguage: action.payload,
            }
        }
        case IS_GOOGLEAUT: {
            return {
                ...state,
                isGoogleAut: action.payload,
            }
        }
        case SET_META_DATA: {
            return {
                ...state,
                metaData: action.payload,
            }
        }

        default:
            return state;
    }
}
