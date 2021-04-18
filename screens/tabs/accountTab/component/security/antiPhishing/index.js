import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput
} from 'react-native';
import NavBar from "../../../../../commonComponent/navBar/navBar";
import {useNavigation} from "@react-navigation/native";
import ButtonNew from "../../../../../../helpers/button"
import {connect} from "react-redux";
import PasswordMatchBig from "../../../../../commonComponent/passwordMatchBig";
import {strLocale} from "locale";
import {sendVerificationCode, enableAntiPushigCode} from "../../../../../../actions/userActions";

const antiPhishing = (props) => {
    const navigation = useNavigation();

    useEffect(() => {
        if (props.metaData.otp_enabled === false) {
            props.sendVerificationCode("anti-pishing")
        }
    }, []);

    const [antiCode, setAntiCode] = useState('');
    const [isButtonEnable, setIsButtonEnable] = useState(false);
    const [authenticationCode, setAuthenticationCode] = useState('');

    const antiCodeRef = useRef(null);

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onConfirm = () => {
        if (antiCode.length === 0) {
            alert("Please enter Anti-pushing code")
        } else {
            props.enableAntiPushigCode(antiCode, authenticationCode)
                .then((res) => {
                    onPressBack()
                })
                .catch((err) => {
                    alert("Something want to wrong")
                });
        }
    }

    // const onCompletePattern = (number) => {
    //     alert(number)
    //     // onPressBack()
    // }
    const onCompletePattern = (text) => {
        setAuthenticationCode(text)
        setIsButtonEnable(true)
        // apiCall(text)
        // navigation.navigate("createnewpassword",{
        //     email: params.email
        // })
    }

    const {container, outerTextView, textDescription} = styles;

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={strLocale("security.Antiphishing")}
                    backScreenName={strLocale("security.Security")}
                    onPressBack={onPressBack}/>

            <ScrollView
                style={[container]}
                bounces={false}
            >
                <View style={{marginBottom: 15}}>
                    <View style={outerTextView}>
                        <Text style={[textDescription]}>
                            {strLocale("security.Anti-phishing Code")}
                        </Text>

                        <View
                            style={{width: '100%', height: 50, borderWidth: 1, borderColor: '#DFE2E5', marginTop: 15}}>
                            <TextInput style={{paddingHorizontal: 10, marginHorizontal: 10, height: '100%'}}
                                       ref={antiCodeRef}
                                       placeholder={strLocale("security.Code")}
                                       autoCorrect={false}
                                       value={antiCode}
                                       autoFocus={true}
                                       returnKeyType={'next'}
                                       onChangeText={(text) => {
                                           setAntiCode(text)
                                       }}/>
                        </View>

                        <Text style={[textDescription, {marginTop: 15}]}>
                            {props.metaData.otp_enabled === false && strLocale("security.Email Authentication") || strLocale("security.Google Authentication")}
                        </Text>
                    </View>
                </View>

                <PasswordMatchBig
                    isShowingError={true}
                    isStop={true}
                    isRealAPI={true}
                    onCompletePattern={onCompletePattern}
                />

                <View style={[{marginTop: 51}]}>
                    <ButtonNew
                        title={strLocale("Confirm")}
                        isDisable={!isButtonEnable}
                        onConfirm={onConfirm}/>
                </View>

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
        marginTop: 42
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 31,
        color: '#000000',
    },
})

const mapStateToProps = state => {
    return {
        metaData: state.user.metaData
    };
};

export default connect(mapStateToProps, {
    sendVerificationCode,
    enableAntiPushigCode
})(antiPhishing);
