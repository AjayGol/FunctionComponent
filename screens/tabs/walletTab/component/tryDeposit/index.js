import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import NavBar from "../../../../commonComponent/navBar/navBar";
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../../../helpers/constant";
import TextInputWallet from "../../subComponent/textInputWallet";
import {connect} from "react-redux";
import ButtonNew from "../../../../../helpers/button";
import {emailValidator} from "../../../../../helpers/appHelper";
import Clipboard from '@react-native-community/clipboard';
import WalletRowTwoText from "../../subComponent/walletRowTwoText"
import CopyPastRow from "../../subComponent/copyPastRow";
import {strLocale} from "locale";


const tryDeposite = (props) => {
    const navigation = useNavigation();

    const [amount, setAmonut] = useState("")
    const [textInput, setTextInput] = useState({value: 'Bitubu Teknoloji A.Ş.', error: ''})
    const [btcAddress, setBtcAddress] = useState({value: 'Akbank', error: ''})
    const [IBAN, setIBAN] = useState({value: 'TR05 0004 6006 3888 8000 1675 82', error: ''})
    const [code, setCode] = useState({value: 'SN0E3355F8CE', error: ''})

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onPressRight = () => {

    }

    const onConfirm = () => {
        let isError = false;
        if (textInput.value === '') {
            isError = true;
            setTextInput({value: textInput.value, error: strLocale("alerts.AlertDescription")})
        }

        if (btcAddress.value === '') {
            isError = true;
            setBtcAddress({value: btcAddress.value, error: strLocale("alerts.AlertDescription")})
        }

        if (IBAN.value === '') {
            isError = true;
            setIBAN({value: IBAN.value, error: strLocale("alerts.AlertDescription")})
        }
    }

    const onButtonAmount = (text) => {
        Clipboard.setString(textInput.value);
    }

    const onButtonBTC = () => {
        Clipboard.setString(btcAddress.value);
    }

    const onIBAN = () => {
        Clipboard.setString(IBAN.value);
    }

    const onSearchButton = () => {
        navigation.navigate("searchwallet", {
            title: 'Deposit',
        })
    }

    const onCopy = (text) => {
        Clipboard.setString(text);
    }

    const {
        container, outerTextView, textDescription, buttonTitle, bottomText, importantText, buttonFrame,
        textBold
    } = styles;

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={""}
                    backScreenName={strLocale("wallet.TRYDeposit")}
                    rightTitle={strLocale("wallet.History")}
                    onPressBack={onPressBack}
                    onPressRight={onPressRight}/>

            <ScrollView
                style={[container]}
            >
                <View style={[{left: 0, right: 0, top: 0, bottom: 0, marginBottom: 27}]}>
                    <View style={outerTextView}>
                        <WalletRowTwoText
                            title={strLocale("wallet.SelectCoin")}
                            centerText={"Turkish Lira"}
                            centerText2={"TRY"}
                            onSearchButton={onSearchButton}/>

                        <WalletRowTwoText
                            styleMain={{marginTop: 27}}
                            title={strLocale("wallet.SelectBank")}
                            centerText={"Akbank"}
                            centerText2={""}
                            onSearchButton={onSearchButton}/>

                        <CopyPastRow
                            styleMain={{marginTop: 27}}
                            title={strLocale("wallet.Name")}
                            mainText={"Bitubu Teknoloji Anonim Şirketi"}
                            onCopy={onCopy}/>

                        <CopyPastRow
                            styleMain={{marginTop: 8}}
                            title={strLocale("wallet.IBAN")}
                            mainText={"TR05 0004 6006 3888 8000 1675 82"}
                            onCopy={onCopy}/>

                        <CopyPastRow
                            styleMain={{marginTop: 8}}
                            title={strLocale("wallet.CODE")}
                            mainText={"SN0E3355F8CE"}
                            onCopy={onCopy}/>


                        {/*<View style={{width: '100%', height: 1, backgroundColor: '#E2E2E2', marginTop: 18}}/>*/}

                        {/*<TextInputWallet*/}
                        {/*    titleHeader={"NAME"}*/}
                        {/*    style={{marginTop: 5}}*/}
                        {/*    placeHolder={"Amount (min 0.0005)"}*/}
                        {/*    image={"icon_copypast"}*/}
                        {/*    keyboardType={"number-pad"}*/}
                        {/*    onButtonRightClick={onButtonAmount}*/}
                        {/*    textInput={textInput}*/}
                        {/*    setTextInput={setTextInput}*/}
                        {/*    isDisableTextTouch={"1"}/>*/}

                        {/*<View style={{marginTop: 7, width: Constant.screenWidth}}>*/}
                        {/*    <ButtonNew*/}
                        {/*        title={"Confirm"}*/}
                        {/*        onConfirm={onConfirm}*/}
                        {/*        isMainStyle={buttonFrame}*/}
                        {/*        isTextStyle={buttonTitle}/>*/}
                        {/*</View>*/}

                        <View>
                            <Text style={[bottomText]}>
                                {strLocale("wallet.Important")}
                            </Text>
                            <View style={{width: '100%', height: 1, backgroundColor: '#E2E2E2', marginTop: 10}}/>
                            <Text
                                style={importantText}>{strLocale("wallet.Description")}</Text>
                        </View>
                    </View>
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
        marginTop: 21
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#000000',
        textAlign: 'center'
    },
    bottomText: {
        marginTop: 56,
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 31,
        color: '#000000',
        marginLeft: 16
    },
    importantText: {
        marginHorizontal: 17,
        marginTop: 10,
        color: '#000000',
        textAlign: 'left'
    },
    buttonFrame: {
        backgroundColor: Constant.transparent,
        height: 43,
        borderWidth: 1,
        borderColor: '#DFE2E5',
        marginHorizontal: 5
    },
    buttonTitle: {
        color: '#010522',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 31
    },
    textBold: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
    },
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(tryDeposite);
