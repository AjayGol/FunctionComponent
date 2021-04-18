import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image, TouchableOpacity, ActivityIndicator
} from 'react-native';
import NavBar from "../../../../../commonComponent/navBar/navBar";
import PasswordMatchBig from "../../../../../commonComponent/passwordMatchBig";
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../../../../helpers/constant";
import ButtonNew from "../../../../../../helpers/button"
import {connect} from "react-redux";
import {getBarcode, enableGooglAut, disableGooglAut, isGoogleAutheEnalble} from "../../../../../../actions/userActions";
import Clipboard from "@react-native-community/clipboard";
import {strLocale} from "locale";

const googleAuthentication = (props) => {
    const navigation = useNavigation();

    const [isValidation, setIsValidation] = useState(false);
    const [isCompletedVarification, setIsCompletedVarification] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isLanchLoading, setIsLanchLoading] = useState(true)
    const [barcodeText, setBarcodeText] = useState('')
    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
        apiCall()
    }, []);

    const setIsLoadingMethod = (flag) => {
        setIsLoading(flag)
    };

    const apiCall = (text) => {
        if (!isLoading) {
            setIsLoadingMethod(true)

            props.getBarcode(text)
                .then((res) => {
                    setIsLoadingMethod(false)
                    setIsLanchLoading(false)
                    let number = res.data && res.data.data && res.data.data.url || '';
                    if (number !== '') {
                        let number22 = number.split("secret=")
                        if (number22[1]) {
                            setBarcodeText(number22[1])
                        }
                    }
                })
                .catch((err) => {
                    if (err.status === 400) {
                        setIsOn(true)
                    }
                    setIsLoadingMethod(false)
                    setIsLanchLoading(false)
                    // alert(JSON.stringify("dsdfdsf"))
                });
        }
    }

    const apiCall2 = (text) => {
        if (!isLoading) {
            setIsLoadingMethod(true)
            if (isOn === false) {
                props.enableGooglAut(text)
                    .then((res) => {
                        props.isGoogleAutheEnalble("Enable")
                        setTimeout(() => {
                            setIsLoadingMethod(false)
                            navigation.goBack()
                        }, 1000)
                    })
                    .catch((err) => {
                        setIsLoadingMethod(false)
                        // this.setIsLoading(false);

                        setIsValidation(true)
                        setTimeout(() => {
                            setIsValidation(false)
                        }, 100)
                    });
            }else{
                props.disableGooglAut(text)
                    .then((res) => {
                        props.isGoogleAutheEnalble("Disable")
                        setTimeout(() => {
                            setIsLoadingMethod(false)
                            navigation.goBack()
                        }, 1000)
                    })
                    .catch((err) => {
                        setIsLoadingMethod(false)
                        // this.setIsLoading(false);

                        setIsValidation(true)
                        setTimeout(() => {
                            setIsValidation(false)
                        }, 100)
                    });
            }
        }
    }

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onConfirm = () => {

    }

    const onCompletePattern = (text) => {
        // onPressBack()
        apiCall2(text)
    }

    const onCopy = (text) => {
        Clipboard.setString(barcodeText);
    }

    const {
        container,
        outerTextView,
        barcode,
        textDescription,
        mainlink,
        link,
        bottomText,
        inputBox,
        titleCopyButton
    } = styles;

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={strLocale("security.Google Authentication")}
                    backScreenName={strLocale("security.Security")}
                    onPressBack={onPressBack}/>

            {
                isLanchLoading &&
                <ActivityIndicator color={"#0073F7"} style={{marginTop: 20}}/>
            }

            <ScrollView
                style={[container]}
            >
                {
                    !isLanchLoading && isOn === false &&
                    <View style={[{left: 0, right: 0, top: 0, bottom: 0, marginBottom: 27}]}>
                        <View style={[outerTextView]}>
                            <Text style={[textDescription]}>
                                {strLocale("security.GoogleDescription")}
                            </Text>

                            <View
                                style={[mainlink, {flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10}]}>
                                <Text style={[link]} numberOfLines={1}>{barcodeText}</Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 1}}/>
                                    <TouchableOpacity onPress={() => onCopy()} style={{
                                        backgroundColor: '#F8F8FB',
                                        height: 22,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}>
                                        <Image resizeMode="contain" source={{uri: 'icon_copypast2'}}
                                               style={{width: 9, height: 9, marginLeft: 6}}/>
                                        <Text style={[titleCopyButton, {
                                            marginLeft: 6,
                                            marginRight: 4,
                                            color: '#C9CED6'
                                        }]}>{"Copy"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={[bottomText]}>
                                {strLocale("security.GoogleValidation")}
                            </Text>
                        </View>
                    </View>
                }

                {
                    !isLanchLoading && isOn === true &&
                    <View style={[outerTextView, { marginTop: -20, marginBottom: 10}]}>
                        <Text style={[bottomText]}>
                            {"Please enter the 6-digit code to complete the google authenticator settings."}
                        </Text>
                    </View>
                }

                {
                    !isLanchLoading &&
                    <PasswordMatchBig
                        isWrongPassword={isValidation}
                        isShowingError={true}
                        onCompletePattern={onCompletePattern}
                        isCompletedVarification={isCompletedVarification}
                        redirectPage={"Home"}
                        isLoading={isLoading}
                        isRealAPI={true}
                    />
                }

                {/*{*/}
                {/*    !isLoading &&*/}
                {/*    <View style={[{marginTop: 42, marginBottom: 15}]}>*/}
                {/*        <ButtonNew*/}
                {/*            title={"Confirm Code"}*/}
                {/*            onConfirm={onConfirm}/>*/}
                {/*    </View>*/}
                {/*}*/}

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    outerTextView: {
        marginHorizontal: 20,
        marginTop: 20
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 31,
        color: '#000000',
    },
    bottomText: {
        marginTop: 37,
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 31,
        color: '#000000',
    },
    mainlink: {
        borderWidth: 1,
        borderColor: '#DFE2E5',
        borderRadius: 6
    },
    link: {
        paddingRight: 10,
        lineHeight: 22,
        fontSize: 12,
        fontWeight: '600',
        color: '#000000',
        maxWidth: Constant.screenWidth - 100,
    },
    linkCopy: {
        padding: 5,
        lineHeight: 22,
        fontSize: 8,
        fontFamily: 'System',
        fontWeight: '500',
        color: '#000000'
    },
    barcode: {
        width: 136,
        height: 136,
        marginTop: 51
    },
    textbox: {
        height: Constant.isIOS && 30 || 40,
        width: 30,
        margin: 3,
        color: '#000000',
        textAlign: 'center'
    },
    inputBox: {
        width: (Constant.screenWidth - 75) / 6,
        height: '100%',
        borderWidth: 1,
        borderColor: '#C3D3D4',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCopyButton: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 8,
        lineHeight: 22
    },
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {
    getBarcode,
    enableGooglAut,
    disableGooglAut,
    isGoogleAutheEnalble
})(googleAuthentication);
