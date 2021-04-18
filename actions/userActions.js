import {
    SET_SAFE_AREA_INTENT,
    SET_SAFE_AREA_INTENT_CHAT,
    SET_SAFE_AREA_INTENT_X,
    KEYBOARD_HEIGHT,
    APP_SET_USER_DATA,
    START_LOADING,
    RESET_STORE,
    APP_LANGUAGE,
    IS_GOOGLEAUT,
    SET_META_DATA
} from './types'
import React, {Component, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppConstant from '../helpers/constant';
import Constant from '../services/apiConstant';
import {CallApi} from '../services/apiCall'
import {appDefaultReducer} from "../redux/defaultReducer";
import {strLocale} from "locale";

export const loginUser = (email, password, isNewUser = false, otp_code = "") => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            email: email,
            password: password,
            otp_code: otp_code,
            application_id: "0d618fdbaff694d28c0adf7d6b782e9397da0600e68fca269c422fd431ea84a3"
        }

        return CallApi(Constant.baseUrl + Constant.login, 'post', {}, {}, {}, tempData)
            .then((response) => {
                let user = {
                    email: email,
                    password: password,
                    token: response.data
                };
                AsyncStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: APP_SET_USER_DATA,
                    payload: user,
                });
                return dispatch(getAllMetaData(response.data))
                // return Promise.resolve(true);
            })
            .catch((error) => {
                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401) {
                        data.Heading = strLocale("errorApi.Title");
                        data.Description = strLocale("errorApi.Incorrect");
                        data.status = 401;
                    } else if (error.response.status === 403) {
                        data.Heading = error.response.data.error;
                        data.Description = "";
                        data.status = 403;
                    } else if (error.response.status === 500) {
                        data.Heading = strLocale("errorApi.ServerError");
                        data.Description = strLocale("errorApi.SomethingWrong");
                        data.status = 500;
                    } else if (error.status === 408 || error.message.includes(strLocale("errorApi.NetworkError"))) {
                        data.Heading = AppConstant.appName;
                        data.Description = strLocale("errorApi.InternetConnection");
                        data.status = 501;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = strLocale("errorApi.SomethingWrongDescription");
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const registrationUser = (email, password) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            email: email,
            password: password,
        }

        return CallApi(Constant.baseUrl + Constant.registration, 'post', {}, {}, {}, tempData)
            .then((response) => {
                return Promise.resolve(true);
            })
            .catch((error) => {
                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401) {
                        data.Heading = strLocale("errorApi.Title");
                        data.Description = strLocale("errorApi.Incorrect");
                        data.status = 401;
                    } else if (error.response.status === 422) {
                        let value = error.response.data.error;
                        if (value[0]) {
                            data.Heading = value[0];
                        }
                        data.Description = "";
                        data.status = 422;
                    } else if (error.response.status === 423) {
                        data.Heading = strLocale("errorApi.AccountLocked");
                        data.Description = "";
                        data.status = 423;
                    } else if (error.response.status === 500) {
                        data.Heading = strLocale("errorApi.ServerError");
                        data.Description = strLocale("errorApi.SomethingWrong");
                        data.status = 500;
                    } else if (error.status === 408 || error.message.includes(strLocale("errorApi.NetworkError"))) {
                        data.Heading = AppConstant.appName;
                        data.Description = strLocale("errorApi.InternetConnection");
                        data.status = 501;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = strLocale("errorApi.SomethingWrongDescription");
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const verificationEmailUser = (otp_code = "", email, password) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            confirmation_token: otp_code,
        }

        return CallApi(Constant.baseUrl + Constant.emailConfirmation, 'post', {}, {}, {}, tempData)
            .then((response) => {
                return dispatch(loginUser(email, password, true));
            })
            .catch((error) => {
                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};

                data.Heading = AppConstant.appName;
                data.Description = strLocale("errorApi.SomethingWrongDescription");
                data.status = 501;
                return Promise.reject(data);
            })
    };
};

export const forgotPasswordAPI = (email) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            email: email,
        }

        return CallApi(Constant.baseUrl + Constant.forgotPassword, 'post', {}, {}, {}, tempData)
            .then((response) => {
                return Promise.resolve(true);
            })
            .catch((error) => {
                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401 || error.response.status === 404) {
                        data.Heading = strLocale("errorApi.Title");
                        data.Description = strLocale("errorApi.EmailIncorrect");
                        data.status = 401;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = strLocale("errorApi.SomethingWrongDescription");
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const updatePassword = (reset_password_token, password, email) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            reset_password_token: reset_password_token,
            password: password,
            email: email
        }

        return CallApi(Constant.baseUrl + Constant.forgotPassword, 'put', {}, {}, {}, tempData)
            .then((response) => {
                return Promise.resolve(true);
            })
            .catch((error) => {v
                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401 || error.response.status === 404) {
                        data.Heading = strLocale("errorApi.Title");
                        data.Description = strLocale("errorApi.Incorrect");
                        data.status = 401;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = strLocale("errorApi.SomethingWrongDescription");
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const changePassword = (old_password,new_password) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            old_password: old_password,
            new_password: new_password
        }

        return CallApi(Constant.baseUrl + Constant.changePassword, 'put', {}, {"Authorization": "Bearer " + getState().user.token}, {}, tempData)
          .then((response) => {
              return Promise.resolve(true);
          })
          .catch((error) => {
              dispatch({
                  type: START_LOADING,
                  payload: false,
              });
              let data = {};
              if (error !== undefined) {

                  if (error.response.status === 401 || error.response.status === 404) {
                      data.Heading = strLocale("errorApi.Title");
                      data.Description = strLocale("errorApi.PasswordIncorrect");
                      data.status = 401;
                  }
              } else {
                  data.Heading = AppConstant.appName;
                  data.Description = strLocale("errorApi.SomethingWrongDescription");
                  data.status = 501;
              }
              return Promise.reject(data);
          })
    };
};

export const getBarcode = (reset_password_token, password) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {}

        return CallApi(Constant.baseUrl + Constant.generateQRText, 'post', {}, {"Authorization": "Bearer " + getState().user.token}, {}, tempData)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((error) => {

                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 400) {
                        data.Heading = "2FA has been enabled for this account";
                        data.Description = "Your email is incorrect. Please check your details and try again.";
                        data.status = 400;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = "Something went wrong Please try again";
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const enableGooglAut = (otp) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            code: otp
        }

        return CallApi(Constant.baseUrl + Constant.enable_2fa, 'post', {}, {"Authorization": "Bearer " + getState().user.token}, {}, tempData)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((error) => {v
                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401 || error.response.status === 404) {
                        data.Heading = "Incorrect Details";
                        data.Description = "Your email is incorrect. Please check your details and try again.";
                        data.status = 401;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = "Something went wrong Please try again";
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const disableGooglAut = (otp) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_LOADING,
            payload: true,
        });
        let tempData = {
            code: otp
        }

        return CallApi(Constant.baseUrl + Constant.disable_2fa, 'post', {}, {"Authorization": "Bearer " + getState().user.token}, {}, tempData)
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((error) => {v
                dispatch({
                    type: START_LOADING,
                    payload: false,
                });
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401 || error.response.status === 404) {
                        data.Heading = "Incorrect Details";
                        data.Description = "Your email is incorrect. Please check your details and try again.";
                        data.status = 401;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = "Something went wrong Please try again";
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const getAllMetaData = () => {
    return (dispatch, getState) => {
        let token = "Bearer " + getState().user.token;

        return CallApi(Constant.baseUrl+Constant.userDetail,'get',{},{"Authorization":token})
            .then((response)=> {
                try{
                   dispatch({
                        type: SET_META_DATA,
                        payload: response,
                    });
                    // dispatch(calculateImprovementByActivity());
                    return Promise.resolve(true);
                }catch (e){
                    alert(JSON.stringify(e))
                    if(isFromInitial){
                        return Promise.reject(true);
                    }
                }
            })
            .catch((error)=>{
            })
    };
};

export const setSafeAreaIntent = (data) => {
    return (dispatch, getState) => {
        if (AppConstant.isIOS) {
            return dispatch({
                type: SET_SAFE_AREA_INTENT,
                payload: data
            });
        }
    }
};

export const setKeyboardHeight = (data) => {
    return (dispatch, getState) => {
        if (AppConstant.isIOS) {
            return dispatch({
                type: KEYBOARD_HEIGHT,
                payload: data
            });
        }
    }
};

//Reset Store
export const resetStoreData = () => {
    return (dispatch, getState) => {
        appDefaultReducer.user.safeAreaInsetsData = getState().user.safeAreaInsetsDefault;
        appDefaultReducer.user.safeAreaInsetsDefault = getState().user.safeAreaInsetsDefault;
        // appDefaultReducer.navigation = getState().navigation
        return dispatch({
            type: RESET_STORE,
            payload: appDefaultReducer
        });
    };
};

export const appLanguageChange = (data) => {
    return (dispatch, getState) => {
        return dispatch({
            type: APP_LANGUAGE,
            payload: data
        });
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

export const sendVerificationCode = (action_from) => {
    return (dispatch, getState) => {
        let tempData = {
            action_from: action_from,
        }

        return CallApi(Constant.baseUrl + Constant.verificationCodeEmail, 'post', {}, {"Authorization": "Bearer " + getState().user.token}, {}, tempData)
            .then((response) => {
                return Promise.resolve(true);
            })
            .catch((error) => {
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401 || error.response.status === 404) {
                        data.Heading = strLocale("errorApi.Title");
                        data.Description = strLocale("errorApi.EmailIncorrect");
                        data.status = 401;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = strLocale("errorApi.SomethingWrongDescription");
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

export const enableAntiPushigCode = (anti_pishing, confirmation_code) => {
    return (dispatch, getState) => {
        let tempData = {
            anti_pishing: anti_pishing,
            confirmation_code: confirmation_code
        }

        return CallApi(Constant.baseUrl + Constant.antiPishingCode, 'patch', {}, {"Authorization": "Bearer " + getState().user.token}, {}, tempData)
            .then((response) => {
                return Promise.resolve(true);
            })
            .catch((error) => {
                let data = {};
                if (error !== undefined) {

                    if (error.response.status === 401 || error.response.status === 404) {
                        data.Heading = strLocale("errorApi.Title");
                        data.Description = strLocale("errorApi.EmailIncorrect");
                        data.status = 401;
                    }
                } else {
                    data.Heading = AppConstant.appName;
                    data.Description = strLocale("errorApi.SomethingWrongDescription");
                    data.status = 501;
                }
                return Promise.reject(data);
            })
    };
};

