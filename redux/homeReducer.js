import {
    HOME_MOSTTRADE_ARR,
    HOME_GAINERS_ARR,
    HOME_LOSERS_ARR,
    HOME_FAV_ARR
} from '../actions/types';
import _ from 'lodash';
import {appDefaultReducer} from './defaultReducer';

const INITIAL_STATE = appDefaultReducer.home;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HOME_FAV_ARR: {
            return {
                ...state,
                favArr: action.payload,
            };
        }
        case HOME_MOSTTRADE_ARR: {
            return {
                ...state,
                mostTradeArr: action.payload,
            };
        }
        case HOME_GAINERS_ARR: {
            return {
                ...state,
                gainersArr: action.payload,
            };
        }
        case HOME_LOSERS_ARR: {
            return {
                ...state,
                losersArr: action.payload,
            };
        }

        default:
            return state;
    }
}
