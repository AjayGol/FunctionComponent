import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Header, InfoBtn, Intro, HomeTabBar} from "../../commonComponent";
import {connect} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../helpers/constant";
import {strLocale} from "locale";
import ButtonWallet from "../walletTab/subComponent/buttonWallet";

const HomeTab = (props) => {
    const navigation = useNavigation();
    // const navigation = useNavigation();

    // useEffect(() => {
    //    setTimeout(() => {
    //        alert('dfdf')
    //        navigation.navigate('loginPresent');
    //    }, 1000)
    // }, [props.token]);
    const [balanceHideShow, setBalanceHideShow] = useState(true);
    const [priceBitCoin, setPriceBitCoin] = useState("1.2712");
    const [priceDollar, setPriceDollar] = useState("7,459.50");

    const onSupport = () => {
        navigation.navigate("support")
    }

    const onUser = () => {
        if (props.token === '') {
            if (Constant.isANDROID){
                navigation.navigate('login');
            }else{
                navigation.navigate('loginpresent');
            }
        } else {
            navigation.navigate("accounttab")
        }
    }

    const onBalaceHideShow = () => {
        setBalanceHideShow(!balanceHideShow)
    }

    const onInfoClick = (type) => {
        if (props.token === '') {
            if (Constant.isANDROID){
                navigation.navigate('login');
            }else{
                navigation.navigate('loginpresent');
            }
        } else {
            switch (type) {
                case "deposit":
                    navigation.navigate("searchwallet", {
                        title: 'Deposit',
                    })
                    break;
                case "withdrawal":
                    navigation.navigate("searchwallet", {
                        title: 'Withdraw',
                    })
                    break;
                case "token":
                    break;
                case "wallet":
                    navigation.navigate("Wallet")
                    break;
                default:
                    break;
            }
        }
    }

    const renderHeader = () => {
        return (
          <View style={{marginTop: 30, alignItems: 'center', marginHorizontal: 20}}>
              <View style={{width: '100%', alignItems: 'center'}}>
                  <TouchableOpacity onPress={onBalaceHideShow}
                                    style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                      <Text style={[textThin]}>{strLocale("home.TotalBalance")}</Text>
                      <Image resizeMode="contain" style={{height: 10, width: 10, marginLeft: 6}}
                             source={{uri: balanceHideShow && 'icon_openeye' || 'icon_eyeclosedark'}}/>
                  </TouchableOpacity>

                  <View style={{flexDirection: 'row', marginTop: 3}}>
                      <Text style={[textBig]}>{balanceHideShow && `₿${priceBitCoin}` || `₿******`}</Text>
                      <Text style={[textBig, {marginHorizontal: 21}]}>{"~"}</Text>
                      <Text style={[textBig]}>{balanceHideShow && `$${priceDollar}` || `$******`}</Text>
                  </View>
              </View>
          </View>
        )
    }

    const {textThin, textBig, textSmall, navTitle, filterText} = styles;

    return (
        <View style={{flex: 1, backgroundColor: Constant.appScreenBackground}}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" color="#000000"/>
            <Header safeAreaInsetsData={props.safeAreaInsetsData}
                    onSupport={onSupport}
                    onUser={onUser}/>
            {
                props.token === '' &&
                <Intro/>
                ||
                renderHeader()
            }
            <InfoBtn
                onInfoClick={onInfoClick}/>
            <HomeTabBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    textThin: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 22,
        color: '#010522',
        textAlign: 'center'
    },
    textBig: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#010522',
        textAlign: 'center'
    },
    textSmall: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#000000',
        textAlign: 'center'
    },
    navTitle: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 22,
         color: '#010522',
    },
    filterText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 22,
        color: '#010522',
    }

})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
        token: state.user.token || '',
    };
};

export default connect(mapStateToProps, {})(HomeTab);
