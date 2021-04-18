import {Alert, NativeModules} from 'react-native';
import Constant from "./constant";
import AsyncStorage from '@react-native-async-storage/async-storage';

// export function emailValidator(email) {
//     const re = /\S+@\S+\.\S+/
//     if (!email || email.length <= 0) return "Email can't be empty."
//     if (!re.test(email)) return 'Ooops! We need a valid email address.'
//     return ''
// }

let AndroidNativeModule = NativeModules.AndroidNativeModule;

export function emailValidator(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function nameValidator(name) {
    if (!name || name.length <= 0) return "Name can't be empty."
    return ''
}

export function passwordValidator(password) {
    if (!password || password.length <= 0) return "Password can't be empty."
    return ''
}

const onLeftBtnPress = (res) => {
    // isAlertShown = false;
    console.log("not Handle");
};

const onRightBtnPress = (res) => {
    // isAlertShown = false;
    console.log("not Handle");
};

export function showThemeAlert(objAlert) {
    let defaultAlertObj = {
        title: "",
        message: "",
        leftBtn: "",
        rightBtn: "",
        isLightTheme: false,
        leftPress: onLeftBtnPress,
        rightPress: onRightBtnPress,
        styleLeft: 'default',
        styleRight: 'default',
    };
    Object.assign(defaultAlertObj, objAlert);
    if (Constant.isANDROID) {
        AndroidNativeModule.showThemeAlert(defaultAlertObj.title,
            defaultAlertObj.message, defaultAlertObj.leftBtn, defaultAlertObj.rightBtn,
            defaultAlertObj.isLightTheme,
            defaultAlertObj.leftPress,
            defaultAlertObj.rightPress);
    } else {
        Alert.alert(defaultAlertObj.title,
            defaultAlertObj.message,
            [
                {
                    text: defaultAlertObj.leftBtn, onPress: defaultAlertObj.leftPress,
                    style: defaultAlertObj.styleLeft
                },
                {
                    text: defaultAlertObj.rightBtn, onPress: defaultAlertObj.rightPress,
                    style: defaultAlertObj.styleRight
                },
            ],
        );
    }
}

export function resetAllAsyncStorageData() {
    AsyncStorage.getAllKeys((err, keys) => {
        keys.forEach(key => {
            AsyncStorage.getItem(key).then((err, res) => {
            })
            AsyncStorage.removeItem(key);
        })
        AsyncStorage.setItem('isNewOpen', "true");
    });
}
