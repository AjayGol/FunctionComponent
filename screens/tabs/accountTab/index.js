import React, {useState} from 'react';
import {Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Appbar, Avatar, Card, Paragraph, useTheme} from "react-native-paper";
import RoutingComponents from "./component/routingComponents";
import HeaderProfile from "./component/headerProfile";
import NavBar from "../../commonComponent/navBar/navBar"
import {connect} from "react-redux";
import {showThemeAlert, resetAllAsyncStorageData} from "../../../helpers/appHelper";
import {resetStoreData} from "../../../actions/userActions";
import {strLocale} from "locale";
import DeviceInfo from "react-native-device-info";

const Index = (props) => {
    const navigation = useNavigation();
    const {
        colors: {background},
    } = useTheme();

    const listData = [
        {id: 1, title: strLocale("account.My Referral ID"), description: "ID368635BCFF", iconRight: 'arrow-right'},
        {id: 2, title: strLocale("account.Verification"), description: props.metaData && props.metaData.level && `LVL ${props.metaData.level}` || "LVL 1", iconRight: 'arrow-right'},
        {id: 3, title: strLocale("account.Security"), iconRight: 'arrow-right'},
        {id: 4, title: strLocale("account.Support"), iconRight: 'arrow-right'},
        {id: 5, title: strLocale("account.Help"), iconRight: 'arrow-right'},
        {id: 6, title: strLocale("account.Community"), iconRight: 'arrow-right'},
        {id: 7, title: strLocale("account.Language"), description: props.appLanguage && props.appLanguage.title || "English", iconRight: 'arrow-right'},
        {id: 8, title: strLocale("account.Check version"), description: DeviceInfo.getReadableVersion(), iconRight: 'arrow-right'},
        {id: 9, title: strLocale("account.Logout"), iconLeft: 'icon_logout', isBottomLine: true, textColor: '#FF4200'},
    ];

    const [arrList, setArrList] = useState(listData);

    const onPressButton = (id) => {
        switch (id) {
            case 1:
                navigation.navigate('referralScreen')
                break;
            case 2:
                navigation.navigate('verificationscreen')
                break;
            case 3:
                navigation.navigate('security')
                break;
            case 4:
                navigation.navigate('support', {
                    from: 'Account'
                })
                break;
            case 5:
                navigation.navigate('support', {
                    from: 'Help',
                    urlLoad: 'https://bitubu.zendesk.com/hc/en-us/requests/new'
                })
                break;
            case 6:
                navigation.navigate('support', {
                    from: 'Community',
                    urlLoad: 'https://bitubu.com/community'
                })
                break;
            case 7:
                navigation.navigate('language')
                break;
            case 9:
                logoutConfirmation()
                break;
        }
    }

    const logoutConfirmation = () => {
        showThemeAlert({
            title: "Logout",
            message: "Are you sure you want to Logout?",
            leftBtn: "Cancel",
            rightBtn: "Logout",
            styleRight: 'destructive',
            rightPress: (i) => {
                props.resetStoreData();
                resetAllAsyncStorageData();

                navigation.navigate("Home")
            },
        });
    }

    const onPressBack = () => {
        navigation.navigate('Home')
    }

    // alert(JSON.stringify(props.metaData))

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <NavBar title={"Account"} onPressBack={onPressBack}/>

            <ScrollView
                style={[styles.container]}
                bounces={false}
            >
                <HeaderProfile
                    title={props.metaData && props.metaData.email || ''}
                    bottomTitle={props.metaData && props.metaData.uid || ''}
                    image={''}/>

                {
                    arrList.map((objData, index) => {
                        let headerTitle = Object.keys(objData);
                        return (
                            <RoutingComponents
                                id={objData.id || ''}
                                title={objData.title || ''}
                                rightText={objData.description || ''}
                                iconLeft={objData.iconLeft || ''}
                                iconRight={objData.iconRight || ''}
                                isBottomLine={objData.isBottomLine}
                                textColor={objData.textColor}
                                onPressButton={onPressButton}
                                keyValue={index}/>
                        )
                    })
                }

            </ScrollView>
        </View>
    );
};


Index.title = 'Card';

const styles = StyleSheet.create({
    container: {
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        width: '100%',
        flex: 1,
    },
});

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
        appLanguage: state.user.appLanguage,
        metaData: state.user.metaData,
    };
};

export default connect(mapStateToProps, {
    resetStoreData,
})(Index);
