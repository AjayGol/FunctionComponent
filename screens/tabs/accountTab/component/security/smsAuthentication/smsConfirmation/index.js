import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import NavBar from "../../../../../../commonComponent/navBar/navBar";
import {useNavigation} from "@react-navigation/native";
import ButtonNew from "../../../../../../../helpers/button"
import {connect} from "react-redux";
import Animated, {Easing} from "react-native-reanimated";
import PasswordMatch from "../../../../../../commonComponent/passwordMatch";
import {strLocale} from "locale";

const smsConfirmation = (props) => {
    const navigation = useNavigation();

    const [bottomButton, setBottomButton] = useState((props.safeAreaInsetsData.bottom + 20));
    const [isButtonEnable, setIsButtonEnable] = useState(false);

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onConfirm = () => {

    };

    const onCompletePattern = () => {
        setIsButtonEnable(true)
    }

    const {container, outerTextView, textDescription, resetSend, textTitle} = styles;

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={strLocale("security.SMS Authentication")}
                    backScreenName={strLocale("security.Security")}
                    onPressBack={onPressBack}/>

            <ScrollView
                style={[container]}
                bounces={false}
            >
                <View style={[{left: 0, right: 0, top: 0, bottom: 0}]}>
                    <View style={outerTextView}>
                        <Text style={textTitle}>{strLocale("security.SmsConfirmationCode")}</Text>
                        <Text
                            style={[textDescription]}>{strLocale("security.SmsAuthenticationDescription")}
                            <Text style={[textDescription, {color: '#0073F7'}]}>{"+41 (76) 558 77 76"}</Text>
                            <Text style={[textDescription]}>{`. ${strLocale("security.SmsAuthenticationDescription2")}`}</Text></Text>
                    </View>
                </View>

                <View style={{
                    marginTop: 44,
                    height: 85,
                    flexDirection: 'row'
                }}>
                    <PasswordMatch
                        isShowingError={true}
                        onCompletePattern={onCompletePattern}
                    />
                </View>
            </ScrollView>

            <Animated.View style={[{
                bottom: bottomButton, left: 0, right: 0, position: 'absolute',
                opacity: 1,
            }]}>
                <View style={{
                    width: '100%', alignItems: 'center', marginBottom: 30, flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Image resizeMode="contain" source={{uri: 'icon_share'}}
                           style={{width: 15, height: 12, marginRight: 11}}/>
                    <Text
                        style={[resetSend]}>{strLocale("Resend")}
                    </Text>
                </View>
                <ButtonNew
                    title={strLocale("Confirm Code")}
                    isDisable={!isButtonEnable}
                    onConfirm={onConfirm}/>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        width: '100%',
        flex: 1,
    },
    outerTextView: {
        marginHorizontal: 20,
        marginTop: 26
    },
    textTitle: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        color: '#222222',
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#7E7E7E',
        marginTop: 10,
    },
    resetSend: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: '#222222',
        opacity: 0.4
    }
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(smsConfirmation);
