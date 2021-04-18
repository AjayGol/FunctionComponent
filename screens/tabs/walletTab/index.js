import React, {useState} from 'react';
import {
    Image, StatusBar, StyleSheet, Text, View,
    TouchableOpacity, FlatList
} from "react-native";
import {connect} from "react-redux";
import ButtonWallet from './subComponent/buttonWallet'
import WalletRow from './subComponent/walletRow'
import {useNavigation} from "@react-navigation/native";
import Constant from "../../../helpers/constant";
import OverViewList from "./subComponent/overViewList"
import {strLocale} from "locale";
import SportViewList from "./subComponent/sportViewList"

const WalletTab = (props) => {
    const navigation = useNavigation();

    const [balanceHideShow, setBalanceHideShow] = useState(true);
    const [priceBitCoin, setPriceBitCoin] = useState("1.2712");
    const [priceDollar, setPriceDollar] = useState("7,459.50");
    const [smallBalances, setSmallBalances] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0)

    const onBalaceHideShow = () => {
        setBalanceHideShow(!balanceHideShow)
    }

    const onHideSmallBalances = () => {
        setSmallBalances(!smallBalances)
    }

    const onDeposit = () => {
        // navigation.navigate("deposit")
        // navigation.navigate("trydeposit")
        navigation.navigate("searchwallet", {
            title: strLocale("wallet.Deposit"),
        })
    }

    const onWithDraw = () => {
        // navigation.navigate("withdrawal")
        // navigation.navigate("trywithdrawal")
        navigation.navigate("searchwallet", {
            title: strLocale("wallet.Withdraw"),
        })
    }

    const onTabChange = (tab) => {
        setSelectedTab(tab)
    }

    const {textThin, textBig, textSmall, navTitle, filterText} = styles;

    const renderHeader = () => {
        return (
            <View style={{marginTop: props.safeAreaInsetsData.top + 34, alignItems: 'center', marginHorizontal: 20}}>
                <View style={{flexDirection: 'row', width: '100%', height: 30}}>
                    <TouchableOpacity onPress={() => onTabChange(0)}>
                        <Text style={[navTitle, {opacity: selectedTab === 0 && 1.0 || 0.5}]}>{strLocale("wallet.Overview")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTabChange(1)}>
                        <Text style={[navTitle, {
                            marginLeft: 37,
                            opacity: selectedTab === 1 && 1.0 || 0.5
                        }]}>{strLocale("wallet.Spot")}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: Constant.screenWidth, height: 4, backgroundColor: '#F8F8FB'}}/>

                <View style={{width: '100%'}}>
                    <TouchableOpacity onPress={onBalaceHideShow}
                                      style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                        <Text style={[textThin]}>{strLocale("wallet.TotalBalance")}</Text>
                        <Image resizeMode="contain" style={{height: 10, width: 10, marginLeft: 6}}
                               source={{uri: balanceHideShow && 'icon_openeye' || 'icon_eyeclosedark'}}/>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', marginTop: 3}}>
                        <Text style={[textBig]}>{balanceHideShow && `₿${priceBitCoin}` || `₿******`}</Text>
                        <Text style={[textBig, {marginHorizontal: 21}]}>{"~"}</Text>
                        <Text style={[textBig]}>{balanceHideShow && `$${priceDollar}` || `$******`}</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 22}}>
                    <ButtonWallet
                        title={strLocale("wallet.Deposit")}
                        image={"img_deposit"}
                        style={{marginRight: 20}}
                        onPressButton={onDeposit}/>

                    <ButtonWallet
                        title={strLocale("wallet.Withdraw")}
                        image={"img_withdraw"}
                        onPressButton={onWithDraw}/>
                </View>
                <View style={{width: Constant.screenWidth, height: 4, backgroundColor: '#F8F8FB', marginTop: 14}}/>
            </View>
        )
    }

    const renderRow = ({item}) => {
        return (
            <View>
                <WalletRow
                    data={item}/>
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            {
                renderHeader()
            }
            <View style={{flex: 1}}>
                {
                    selectedTab === 0 &&
                    <OverViewList/>
                    ||
                    <SportViewList
                        balanceHideShow={balanceHideShow}/>
                }
            </View>

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
    };
};

export default connect(mapStateToProps, {})(WalletTab);

