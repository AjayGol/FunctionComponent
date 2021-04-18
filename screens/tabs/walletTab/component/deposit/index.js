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
import {connect} from "react-redux";
import Clipboard from '@react-native-community/clipboard';
import WalletRowTwoText from "../../subComponent/walletRowTwoText";
import CopyPastRow from "../../subComponent/copyPastRow";
import {strLocale} from "locale";

const depositeView = (props) => {
    const navigation = useNavigation();

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onCopy = (text) => {
        Clipboard.setString(text);
    }

    const onPressRight = () => {

    }

    const onSearchButton = () => {
        navigation.navigate("searchwallet", {
            title: 'Deposit',
        })
    }

    const {
        container, outerTextView, barcode, textDescription, mainlink, titleLink, linkText, bottomText, importantText,
        textBold, titleCopyButton
    } = styles;

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={""}
                    backScreenName={strLocale("wallet.BTCDeposit")}
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
                            centerText={strLocale("wallet.Bitcoin")}
                            centerText2={strLocale("wallet.BTC")}
                            onSearchButton={onSearchButton}/>

                        <View style={{width: '100%', height: 1, backgroundColor: '#E2E2E2', marginTop: 18}}/>

                        <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Image resizeMode="contain" source={{uri: 'img_teamp_barcode'}}
                                   style={barcode}/>
                        </View>

                        <CopyPastRow
                            title={strLocale("wallet.DepositAddress")}
                            mainText={strLocale("wallet.Text")}
                            onCopy={onCopy}/>

                        <View>
                            <Text style={[bottomText]}>
                                {strLocale("wallet.Important")}
                            </Text>
                            <View style={{width: '100%', height: 1, backgroundColor: '#E2E2E2', marginTop: 0}}/>
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
        marginTop: 16
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#000000',
    },
    textBold: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
    },
    bottomText: {
        marginTop: 13,
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 31,
        color: '#000000',
        marginLeft: 16
    },
    titleCopyButton: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 8,
        lineHeight: 22
    },
    mainlink: {
        borderColor: '#DFE2E5',
        marginTop: 21,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    titleLink: {
        lineHeight: 22,
        marginLeft: 12,
        fontSize: 12,
        fontWeight: '600',
        color: '#000000',
        maxWidth: Constant.screenWidth - 50
    },
    linkText: {
        marginTop: 3,
        marginLeft: 12,
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        lineHeight: 31,
        maxWidth: Constant.screenWidth - 50
    },
    barcode: {
        width: 100,
        height: 100,
        marginTop: 18
    },
    importantText: {
        marginHorizontal: 17,
        marginTop: 10,
        color: '#000000',
        textAlign: 'left'
    }
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(depositeView);

