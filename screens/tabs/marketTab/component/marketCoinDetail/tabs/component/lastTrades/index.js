import React, {useState} from 'react';
import {
    Alert, FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import MarketDetailRow from "../../subComponent/marketDetailRow";
import {strLocale} from "locale";

function lastTrades() {
    const [isLowPrize, setIsLowPrize] = useState('Low Price');
    const [arrData, setAddressList] = useState([{
        amount: '0.15412589',
        priceUp: '9452.34',
        priceDown: '9452.34',
        amount2: '0.15412589',
        valuePer: '30%',
        valueLossPer: '50%'
    }, {
        amount: '0.15412589',
        priceUp: '9452.34',
        priceDown: '9452.34',
        amount2: '0.15412589',
        valuePer: '40%',
        valueLossPer: '20%'
    }, {
        amount: '0.15412589',
        priceUp: '9452.34',
        priceDown: '9452.34',
        amount2: '0.15412589',
        valuePer: '10%',
        valueLossPer: '50%'
    }, {
        amount: '0.15412589',
        priceUp: '9452.34',
        priceDown: '9452.34',
        amount2: '0.15412589',
        valuePer: '50%',
        valueLossPer: '20%'
    }, {
        amount: '0.15412589',
        priceUp: '9452.34',
        priceDown: '9452.34',
        amount2: '0.15412589',
        valuePer: '50%',
        valueLossPer: '10%'
    }])

    const renderRow = ({item, index}) => {
        return (
            <MarketDetailRow data={item}/>
        )
    }

    const getCategoryPickerReturn = (data) => {
        return [{label: 'Low Price', value: 'Low Price'}, {label: 'High Price', value: 'High Price'}];
    };

    const {titleText, headerLeft, headerMedium, headerRight} = styles;

    return (
        <View style={{flex: 1, backgroundColor: 'white', marginTop: 2, paddingTop: 10}}>
            <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={headerLeft}>
                    <Text style={[titleText, {marginRight: 5}]}>{strLocale("market.Amount")}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={headerMedium}>
                        <Text style={[titleText]}>{strLocale("market.Price")}</Text>
                    </View>
                </View>

                <View style={headerRight}>
                    <Text style={[titleText, {marginRight: 5}]}>{strLocale("market.Amount")}</Text>
                </View>
            </View>

            <FlatList showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps='always'
                      data={isLowPrize === 'Low Price' ? arrData : arrData2}
                      onEndReachedThreshold={0.5}
                      style={{flex: 1}}
                      ListFooterComponent={
                          <View style={{width: '100%', height: 10}}/>
                      }
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderRow}/>
            <View style={{width: '100%', height: 10}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 12,
        color: '#010522',
        opacity: 0.4
    },
    pickerView: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    headerLeft: {
        height: 23,
        marginLeft: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerMedium: {
        height: 23,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerRight: {
        height: 23,
        marginRight: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgIcon: {
        width: 8,
        height: 10,
        marginTop: 3
    }
});

export default lastTrades;
