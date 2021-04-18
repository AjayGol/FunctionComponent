import {
    HOME_MOSTTRADE_ARR,
    HOME_GAINERS_ARR,
    HOME_LOSERS_ARR,
    HOME_FAV_ARR,
    START_LOADING
} from './types'
import React, {Component, useState, useContext, useEffect} from 'react';
import Constant from '../services/apiConstant';
import {CallApi} from '../services/apiCall'
import DeviceInfo from "react-native-device-info";
import {loginUser} from "./userActions";

export const mostTradeList = () => {
    return (dispatch, getState) => {
        let tempData = {
        }

        return CallApi(Constant.baseUrl + Constant.mostTrade, 'get', {}, {}, {}, tempData)
            .then((response) => {
                // alert(JSON.stringify(Object.keys(response)))
                let arrCount = Object.keys(response) || [];
                let arrValue = [];

                for (let i = 0; i < arrCount.length; i++){
                    let obj = response[arrCount[i]];
                    arrValue.push({
                        id: arrCount[i],
                        titleCompnay: obj.ticker.name,
                        volume: obj.ticker.usd_volume,
                        isSelected: true,
                        price: obj.ticker.last,
                        change: obj.ticker.price_change_percent,
                        changeIncrease: parseInt(obj.ticker.price_change_percent) >= 0 && true || false
                    });
                }

                dispatch({
                    type: HOME_MOSTTRADE_ARR,
                    payload: arrValue,
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                return Promise.reject(data);
            })
    };
};

export const gainersList = () => {
    return (dispatch, getState) => {
        let tempData = {
        }

        return CallApi(Constant.baseUrl + Constant.mostGainers, 'get', {}, {}, {}, tempData)
            .then((response) => {
                // alert(JSON.stringify(Object.keys(response)))
                let arrCount = Object.keys(response) || [];
                let arrValue = [];

                for (let i = 0; i < arrCount.length; i++){
                    let obj = response[arrCount[i]];
                    arrValue.push({
                        id: arrCount[i],
                        titleCompnay: obj.ticker.name,
                        volume: obj.ticker.usd_volume,
                        isSelected: true,
                        price: obj.ticker.last,
                        change: obj.ticker.price_change_percent,
                        changeIncrease: parseInt(obj.ticker.price_change_percent) >= 0 && true || false
                    });
                }

                dispatch({
                    type: HOME_GAINERS_ARR,
                    payload: arrValue,
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                return Promise.reject(data);
            })
    };
};

export const losersList = () => {
    return (dispatch, getState) => {
        let tempData = {
        }

        return CallApi(Constant.baseUrl + Constant.mostLosers, 'get', {}, {}, {}, tempData)
            .then((response) => {
                // alert(JSON.stringify(Object.keys(response)))
                let arrCount = Object.keys(response) || [];
                let arrValue = [];

                for (let i = 0; i < arrCount.length; i++){
                    let obj = response[arrCount[i]];
                    arrValue.push({
                        id: arrCount[i],
                        titleCompnay: obj.ticker.name,
                        volume: obj.ticker.usd_volume,
                        isSelected: true,
                        price: obj.ticker.last,
                        change: obj.ticker.price_change_percent,
                        changeIncrease: parseInt(obj.ticker.price_change_percent) >= 0 && true || false
                    });
                }

                dispatch({
                    type: HOME_LOSERS_ARR,
                    payload: arrValue,
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                return Promise.reject(data);
            })
    };
};


export const getFavoriteProduct = () => {
    return (dispatch, getState) => {
        let uniqueId = DeviceInfo.getUniqueId();
        let tempData = {
            device_id: uniqueId
        }

        let headerDict: {}
        if (getState().user && getState().user.token){
            headerDict = {"Authorization": "Bearer " + getState().user.token}
        }

        return CallApi(Constant.baseUrl + Constant.favoriteList, 'get', {}, headerDict, {}, tempData)
            .then((response) => {
                let arrCount = Object.keys(response) || [];
                let arrValue = [];

                for (let i = 0; i < arrCount.length; i++){
                    let obj = response[arrCount[i]];
                    arrValue.push({
                        id: arrCount[i],
                        titleCompnay: obj.ticker.name,
                        volume: obj.ticker.usd_volume,
                        isSelected: true,
                        price: obj.ticker.last,
                        change: obj.ticker.price_change_percent,
                        changeIncrease: parseInt(obj.ticker.price_change_percent) >= 0 && true || false
                    });
                }

                dispatch({
                    type: HOME_FAV_ARR,
                    payload: arrValue,
                });
                return Promise.resolve(true);
            })
            .catch((error) => {
                return Promise.reject(false);
            })
    };
};

export const AddOrRemoveFavoriteProduct = (marketId = '') => {
    return (dispatch, getState) => {
        let uniqueId = DeviceInfo.getUniqueId();
        let tempData = {
            device_id: uniqueId,
            market_id: marketId
        }

        let headerDict: {}
        if (getState().user && getState().user.token){
            headerDict = {"Authorization": "Bearer " + getState().user.token}
        }

        return CallApi(Constant.baseUrl + Constant.favoriteList, 'post', {}, headerDict, {}, tempData)
            .then((response) => {
                return dispatch(getFavoriteProduct());
            })
            .catch((error) => {
                return Promise.reject(false);
            })
    };
};



export const isGoogleAutheEnalble = (data) => {
    return (dispatch, getState) => {
        return dispatch({
            type: IS_GOOGLEAUT,
            payload: data
        });
    };
};

