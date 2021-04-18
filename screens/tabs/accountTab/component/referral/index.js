import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import NavBar from "../../../../commonComponent/navBar/navBar";
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../../../helpers/constant";

const headerProfile = (props) => {
    const navigation = useNavigation();

    const {container, title, description, link, mainlink, copy, textcopy} = styles;

    const onPressBack = (id) => {
        navigation.goBack()
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={"Referral"}
                    backScreenName={"Accounts"}
                    onPressBack={onPressBack}/>
            <View style={container}>
                <Text style={title}>{"Invite your friends earn Crypto."}</Text>
                <Text
                    style={description}>{"When your friends make a trade, you'll earn up to 40% commission in real time!"}</Text>

                <View style={mainlink}>
                    <Text style={link}>{"bitubu.com/accounts/sign_up?referral_code=IDDC1F53F909"}</Text>
                </View>

                <TouchableOpacity style={copy}>
                    <Text style={textcopy}>Copy</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        height: 19,
        marginTop: 70,
        fontWeight: '500',
        fontSize: 16,
        color: '#000000',
        lineHeight: 19,
    },
    description: {
        height: 34,
        marginTop: 46,
        fontWeight: '500',
        fontSize: 14,
        color: '#000000',
        lineHeight: 17,
        textAlign: 'center',
        marginHorizontal: 41
    },
    link: {
        paddingHorizontal: 10,
        lineHeight: 22,
        marginVertical: 11,
        textAlign: 'center'
    },
    mainlink: {
        borderWidth: 1,
        borderColor: '#DFE2E5',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 46,
        minWidth: Constant.screenWidth - 20
    },
    copy: {
        borderWidth: 1,
        borderColor: '#DFE2E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        minWidth: Constant.screenWidth - 20
    },
    textcopy: {
        lineHeight: 31,
        marginVertical: 6,
        textAlign: 'center'
    },
})

export default headerProfile;
