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
import Clipboard from '@react-native-community/clipboard';
import PickAddressPopUp from "../../../../commonComponent/pickAddress/pickAddress";
import ButtonNew from "../../../../../helpers/button";
import {strLocale} from "locale";
const widthdrawal = (props) => {
    const navigation = useNavigation();

    const [btcAddress, setBtcAddress] = useState({value: '', error: ''})
    const [textInput, setTextInput] = useState({value: '', error: ''})
    const [addressPickerShow, setAddressPickerShow] = useState(false)


    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onCopy = () => {
        Clipboard.setString('MML7G6DQOVAL2MY7VH53O7SWONN4ZNLH');
    }

    const onPressRight = () => {

    }

    const onChangeAmount = (text) => {
        // setAmonut(text);
    }

    const onChangeBTC = (text) => {
        // setBtcAddress(text);
    }

    const onConfirm = () => {
        let isError = false;
        if (textInput.value === '') {
            isError = true;
            setTextInput({value: textInput.value, error: 'Please fill in the blanks.'})
        }

        if (btcAddress.value === '') {
            isError = true;
            setBtcAddress({value: btcAddress.value, error: 'Please fill in the blanks.'})
        }

        // if (isError === false){
        //     navigation.navigate("emailaddressauthenticator");
        // }
    }

    const onButtonAmount = () => {
        setTextInput({value: "0.09000000", error: ''})
    }

    const onButtonAdress = () => {
        setAddressPickerShow(!addressPickerShow)
    }

    const onCompletePopup = () => {
        setBtcAddress({value: "adder fsdsf", error: ''})

        setAddressPickerShow(!addressPickerShow)
    }

    const onButtonBTC = () => {

    }

    const onAddAddress = () => {
        navigation.navigate("addressmanagement")
    }

    const onSearchButton = () => {
        navigation.navigate("searchwallet", {
            title: 'Withdraw',
        })
    }

    const {container, outerTextView, textDescription, bottomText, importantText, textAvailble, textBold,
        textbottomBar} = styles;

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
                    <TouchableOpacity onPress={onSearchButton} style={{marginHorizontal: 20, flexDirection: 'row', alignItems: 'center',
                    marginTop: 21}}>
                        <Text style={[textDescription]}>
                            {strLocale("wallet.SelectCoin")}
                        </Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 0.4}}/>
                            <Text style={[textBold]}>
                                {"Bitcoin"}
                            </Text>
                            <Text style={[textDescription, {marginLeft: 5}]}>
                                {"BTC"}
                            </Text>
                            <View style={{flex: 1}}/>
                        </View>
                        <Image resizeMode="contain" source={{uri: 'icon_cellright'}}
                               style={{width: 15, height: 10}}/>
                    </TouchableOpacity>

                    <View style={outerTextView}>
                        <TextInputWallet
                            style={{marginTop: 5}}
                            placeHolder={strLocale("wallet.BTCAddress")}
                            image={"icon_plusadd"}
                            image2={"icon_scan"}
                            onButtonRightClick={onButtonAdress}
                            onButtonRightClick2={onButtonBTC}
                            textInput={btcAddress}
                            setTextInput={setBtcAddress}/>

                        <TextInputWallet
                            style={{marginTop: 7}}
                            placeHolder={"Amount (min 0.0005)"}
                            image={"icon_amountadd"}
                            imageText={'Max'}
                            keyboardType={"number-pad"}
                            onButtonRightClick={onButtonAmount}
                            textInput={textInput}
                            setTextInput={setTextInput}/>


                        <View style={{marginTop: 7, width: Constant.screenWidth, flexDirection: 'row'}}>
                            <Text style={[textAvailble, {marginLeft: 9}]}>
                                {"Available"}
                            </Text>
                            <Text style={[textAvailble, {marginLeft: 21}]}>
                                {"0.09000000 BTC"}
                            </Text>
                        </View>

                        <View>
                            <Text style={[bottomText]}>
                                {strLocale("wallet.Important")}
                            </Text>
                            <View style={{width: '100%', height: 1, backgroundColor: '#E2E2E2', marginTop: 10}}/>
                            <Text
                                style={importantText}>{strLocale("wallet.DescriptionTryWithdraw")}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#F8F8FB', flexDirection: 'row',
            paddingBottom: props.safeAreaInsetsData.bottom}}>
                <View style={{flex: 1, marginVertical: 20}}>
                    <Text style={[textbottomBar, {marginHorizontal: 20}]}>
                        {strLocale("wallet.Get")}
                    </Text>
                    <Text style={[textbottomBar, {marginHorizontal: 20}]}>
                        {textInput.value === "" && "0.00 BTC" || "0.08500000 BTC"}
                    </Text>
                    <Text style={[textbottomBar, {marginHorizontal: 20}]}>
                        {strLocale("wallet.Fees")}
                    </Text>
                </View>
                <View style={{marginVertical: 20}}>
                    <ButtonNew
                        title={strLocale("wallet.Withdraw")}
                        onConfirm={onConfirm}
                        isMainStyle={{backgroundColor: (btcAddress.value !== '' && textInput.value !== '') && '#008763' || '#F8F8FB', width: 162}}
                        isTextStyle={{color: (btcAddress.value !== '' && textInput.value !== '') && '#FFFFFF' || '#7E7E7E'}}/>
                </View>
            </View>

            {
                addressPickerShow &&
                <PickAddressPopUp
                onComplete={onCompletePopup}
                onAddAddress={onAddAddress}/>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    outerTextView: {
        marginTop: 16
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
        marginTop: 31,
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
    textBold: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
    },
    textAvailble: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 22,
        color: '#000000',
        opacity: 0.5
    },
    textbottomBar: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 17,
        color: '#000000',
        opacity: 0.5
    },
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(widthdrawal);
