import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import WalletRow from "./walletFullDetailRow";
import Constant from "../../../../helpers/constant";
import {strLocale} from "locale";
import ButtonWallet from "./buttonWallet";

const walletRow = (props) => {
    const {container, filterText, subText} = styles;

    const [arrData, setArrData] = useState([{
        title: 'Deposit BTC',
        subTitle: '2021-03-16 09:38',
        price: "+ 1.0125 BTC",
        type: '1'
    }, {
        title: 'Withdrawal BTC',
        subTitle: '2021-03-16 09:38',
        price: "- 1.0125 BTC",
        type: '0'
    }, {
        title: 'Deposit BTC',
        subTitle: '2021-03-16 09:38',
        price: "+ 1.0125 BTC",
        type: '1'
    }, {
        title: 'Withdrawal BTC',
        subTitle: '2021-03-16 09:38',
        price: "- 1.0125 BTC",
        type: '0'
    },{
        title: 'Deposit BTC',
        subTitle: '2021-03-16 09:38',
        price: "+ 1.0125 BTC",
        type: '1'
    }, {
        title: 'Withdrawal BTC',
        subTitle: '2021-03-16 09:38',
        price: "- 1.0125 BTC",
        type: '0'
    },{
        title: 'Deposit BTC',
        subTitle: '2021-03-16 09:38',
        price: "+ 1.0125 BTC",
        type: '1'
    }, {
        title: 'Withdrawal BTC',
        subTitle: '2021-03-16 09:38',
        price: "- 1.0125 BTC",
        type: '0'
    },])

    const renderHeader = () => {
        return (
            <View style={{
                marginHorizontal: 15, marginTop: 15, alignItems: 'center',
                flexDirection: 'row'
            }}>
                <View>
                    <Text style={[filterText]}>{strLocale("wallet.RecentTransactions")}</Text>
                    <View style={{
                        width: Constant.screenWidth,
                        marginLeft: -20,
                        height: 1,
                        backgroundColor: '#F8F8FB',
                        marginTop: 10
                    }}/>
                </View>
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
        <View style={container}>
            {renderHeader()}
            <FlatList showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps='always'
                      data={arrData}
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
    }
})

export default walletRow;
