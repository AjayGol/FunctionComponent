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
import {Appbar, Avatar, Card, DataTable, useTheme} from "react-native-paper";
import Constant from "../../../../../helpers/constant";
import MarketRow from "../../subComponent/marketRowList"
import PickerController2 from "../../../../commonComponent/pickerController/pickAddress"
import {cloneDeep} from "lodash";
import {useNavigation} from "@react-navigation/native";
import {strLocale} from "locale";

let currentPickerValue = '';

function favoritTab() {
    const navigation = useNavigation();

    const [isLowPrize, setIsLowPrize] = useState(strLocale("market.Eth"));

    const [isEmpty, setIsEmpty] = useState(0);

    const [arrData, setAddressList] = useState([{
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }])

    const [arrData2, setAddressList2] = useState([{
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '232',
        isSelected: true,
        price: '323,10',
        subPrice: '$ 343,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '534,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '453,10',
        subPrice: '$ 34343,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: true
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }, {
        titleCompnay: 'LTC',
        titleSubCompnay: 'BTC',
        volume: '125632',
        isSelected: true,
        price: '8.863,10',
        subPrice: '$ 8.863,10',
        change: '0,28 %',
        changeIncrease: false
    }])

    const onRowClick = () => {
        navigation.navigate("marketcoindetail")
    }

    const renderRow = ({item, index}) => {
        return (
            <MarketRow data={item}
                       onRowClick={onRowClick}/>
        )
    }

    const onOpenPicker = () => {
        // Set default value when open picker
        currentPickerValue = '';
    }

    const onFilterUpdate = (type, value) => {
        setIsLowPrize(currentPickerValue)
    };

    const onValueChange = (value, type) => {
        currentPickerValue = value;
        if (Constant.isANDROID) {
            onFilterUpdate(type, value);
        }
    }

    const getData = () => {
        setIsEmpty(1)
    }

    const onAddressAdd = () => {
        navigation.navigate("searchmarket", {
            addedFav: getData
        })
    }

    const getCategoryPickerReturn = (data) => {
        return [{label: strLocale("market.ETH"), value: strLocale("market.ETH")},
                {label: strLocale("market.UBU"), value: strLocale("market.UBU")}];
    };

    const renderHeader = () => {
        if (isEmpty === 0) {
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1, marginTop: (Constant.screenHeight/2) - 140, marginBottom: 21}}>
                        <Text style={[noAddress]}>{strLocale("markets.NoFavorites")}</Text>
                        <TouchableOpacity  onPress={onAddressAdd} style={{marginTop: 21, alignItems: 'center'}}>
                            <View style={{borderWidth: 1, width: 100, height: 35, borderColor: '#010522', justifyContent: 'center',
                                borderRadius: 4}}>
                                <Text style={[addAddress]}>{strLocale("market.AddFavorites")}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return null
    }

    const {titleText, pickerView, headerLeft, headerMedium, headerRight, imgIcon, noAddress, addAddress} = styles;

    return (
        <View style={{flex: 1, backgroundColor: 'white', marginTop: 18}}>
            <View style={{width: '100%', flexDirection: 'row'}}>
                <View style={headerLeft}>
                    <Text style={[titleText, {marginRight: 5}]}>{strLocale("market.Pairs")}</Text>
                    <Image resizeMode="contain" source={{uri: 'icon_priceupdown'}}
                           style={{width: 8, height: 10, marginTop: 3}}/>
                </View>
                <View style={{flex: 1}}/>
                <View style={headerMedium}>
                    <Text style={[titleText, {marginRight: 5}]}>{isLowPrize}</Text>
                    <Image resizeMode="contain" source={{uri: 'icon_priceupdown'}}
                           style={imgIcon}/>

                    <View style={[pickerView]}>
                        <PickerController2
                            itemsData={getCategoryPickerReturn()}
                            type={'filter1'}
                            onOpenPicker={onOpenPicker}
                            onValueChange={onValueChange}
                            onFilterUpdate={onFilterUpdate}
                        />
                    </View>
                </View>

                <View style={headerRight}>
                    <Text style={[titleText, {marginRight: 5}]}>{strLocale("market.Change")}</Text>
                    <Image resizeMode="contain" source={{uri: 'icon_priceupdown'}}
                           style={{width: 8, height: 10, marginTop: 3}}/>
                </View>
            </View>

            <FlatList showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps='always'
                      data={isEmpty === 0 && [] || (isLowPrize === 'ETH' ? arrData : arrData2)}
                      onEndReachedThreshold={0.5}
                      style={{flex: 1}}
                      ListHeaderComponent={renderHeader}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={renderRow}/>
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
        marginRight: Constant.screenWidth * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerRight: {
        height: 23,
        marginRight: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgIcon: {
        width: 8,
        height: 10,
        marginTop: 3
    },
    noAddress: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 12,
        color: '#000000',
        opacity: 0.5,
        textAlign: 'center',
    },
    addAddress: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 12,
        color: '#010522',
        textAlign: 'center',
    },
});

export default favoritTab;