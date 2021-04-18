import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {strLocale} from "locale";

const infoBtn = (props) => {
    const {textTab, container} = styles;
    const {onInfoClick} = props;

    return (
        <View style={container}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => onInfoClick("deposit")} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image resizeMode="contain" source={{uri: 'icon_deposit_home'}}
                           style={{width: 32, height: 32}}/>
                    <Text style={textTab}>{strLocale("home.Deposit")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onInfoClick("withdrawal")} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image resizeMode="contain" source={{uri: 'icon_withdraw_home'}}
                           style={{width: 32, height: 32}}/>
                    <Text style={textTab}>{strLocale("home.Withdraw")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onInfoClick("token")} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image resizeMode="contain" source={{uri: 'icon_tokensale_home'}}
                           style={{width: 32, height: 32}}/>
                    <Text style={textTab}>{strLocale("home.TokenSale")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onInfoClick("wallet")} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image resizeMode="contain" source={{uri: 'icon_wallet_home'}}
                           style={{width: 32, height: 32}}/>
                    <Text style={textTab}>{strLocale("home.Wallet")}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 106,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10
    },
    textTab: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15,
        marginTop: 10,
        color: '#000000'
    },
});

export default infoBtn;
