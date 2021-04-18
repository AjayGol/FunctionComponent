import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import WalletRow from "./walletRow";
import Constant from "../../../../helpers/constant";
import {strLocale} from "locale";
import ButtonWallet from "./buttonWallet";

const walletRow = (props) => {
    const {container, textSmall} = styles;
    const [smallBalances, setSmallBalances] = useState(true);

    const [arrData, setArrData] = useState([{
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 1.34
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 1.23
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 34
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 34
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 64
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 3.25
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 34.3
    }])
    const [arrDataSmall, setArrDataSmall] = useState([{
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 64
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 3.25
    }, {
        title: 'Bitcoin',
        subTitle: 'BTC',
        price: 34.3
    }])

    const onHideSmallBalances = () => {
        setSmallBalances(!smallBalances)
    }

    const renderHeader = () => {
        return (
            <View style={{
                marginHorizontal: 20, marginTop: 18, alignItems: 'center',
            }}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={onHideSmallBalances}
                                      style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View resizeMode="contain" style={{
                            borderWidth: 1, borderColor: smallBalances && '#C3D3D4' || '#008763', height: 10, width: 10,
                            backgroundColor: smallBalances && Constant.transparent || '#008763',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Image resizeMode="contain" style={{height: 8, width: 5}}
                                   source={{uri: 'icon_whiteright'}}/>
                        </View>
                        <Text style={[textSmall, {marginLeft: 5}]}>{strLocale("wallet.HideSmallBalances")}</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                    <Image resizeMode="contain" style={{height: 17, width: 17, marginLeft: 6}}
                           source={{uri: 'icon_search'}}/>
                </View>
                <View style={{width: Constant.screenWidth, height: 1, backgroundColor: '#F8F8FB', marginTop: 12}}/>
            </View>
        )
    }

    const renderRow = ({item}) => {
        return (
            <View>
                <WalletRow
                    data={item}
                    balanceHideShow={props.balanceHideShow}/>
            </View>
        )
    }

    return (
        <View style={container}>
            {renderHeader()}
            <FlatList showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps='always'
                      data={smallBalances && arrData || arrDataSmall}
                      onEndReachedThreshold={0.5}
                      style={{flex: 1}}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderRow}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000'
    },
    filterText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 22,
        color: '#010522',
    },
    textSmall: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#000000',
        textAlign: 'center'
    },
})

export default walletRow;
