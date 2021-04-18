import Constant from "../../helpers/constant";
import _ from "lodash";

export const userDefault = {
    email: "",
    password: "",
    token:"",
    safeAreaInsetsData:{top:0,bottom:0,left:0,right:0},
    safeAreaInsetsDataChat:{top:0,bottom:0,left:0,right:0},
    safeAreaInsetsDefault:{top:0,bottom:0,left:0,right:0},
    keyboardHeight: 0,
    addressPickerPopUp: {
        isShow: false,
        popUpDetail: {
            description: "",
            title: "",
        }
    },
    isLoading:false,
    appLanguage:{title: "English", dbValue: "en", isRTL: false},
    isGoogleAut: "Disable",
    metaData: {
        "uid": "",
        "email": "",
        "role": "",
        "level": 0,
        "otp_enabled": false,
        "state": "active",
        "referral_code": null
    },
};
