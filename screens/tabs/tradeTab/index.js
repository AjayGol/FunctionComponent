import React, {useState} from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList
} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import DropDownTradeTab from './subComponent/dropDownTradeTab'
import {connect} from "react-redux";
import Constant from "../../../helpers/constant";
import ButtonNew from "../../../helpers/button";
import OpenOrderRow from "./subComponent/openOrderRow";
import {useNavigation} from "@react-navigation/native";
import {strLocale} from "locale";


const Tab = createMaterialTopTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {selected: false}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={options.tabBarLabel}
                        style={{flex: 1}}
                    >
                        <Text style={{
                            textAlign: 'center',
                            padding: 5,
                            backgroundColor: isFocused ? (options.tabBarLabel === 'BUY' ? '#008763' : '#ff0000') : '#f8f8f8',
                            color: isFocused ? '#ffffff' : '#010522'
                        }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const TradeTab = (props) => {
    const navigation = useNavigation();

    const [selectedTab, setSelectedTab] = useState(0);

    const [arrData, setArrData] = useState([{
        price: '9790,11',
        amount: '0.01251452',
    }, {
        price: '9790,11',
        amount: '0.01251452',
    }, {
        price: '9790,11',
        amount: '0.01251452',
    }, {
        price: '9790,11',
        amount: '0.01251452',
    }, {
        price: '9790,11',
        amount: '0.01251452',
    }]);

    const [arrMainData, setArrMainData] = useState([{
        type: 'BUY',
        title: 'BTC/USDT',
        date: '06.06.2020 16:22',
        amount: '0.12541253  BTC',
        filled: '0.00000000  BTC',
        price: '9790,11  USDT',
    }, {
        type: 'SELL',
        title: 'BTC/USDT',
        date: '06.06.2020 16:22',
        amount: '0.12541253  BTC',
        filled: '0.00000000  BTC',
        price: '9790,11  USDT',
    }]);

    const renderRow = ({item, index}) => {
        return (
            <OpenOrderRow
                data={item}
            />
        )
    }

    const renderListBottom = () => {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    width: Constant.screenWidth, height: 1, backgroundColor: '#F8F8FB', marginTop: 18
                }}/>
                <View style={{marginLeft: 11, marginRight: 6, flexDirection: 'row'}}>
                    <Text style={[textHeaderInData, {opacity: 0.5, marginVertical: 8}]}>{strLocale("trade.LimitOrder")}</Text>
                    <View style={{flex: 1}}/>
                    <Text style={[textHeaderInData, {opacity: 0.5, marginVertical: 8}]}>{strLocale("trade.AllOrders")}</Text>
                </View>
                <View style={{
                    width: Constant.screenWidth, height: 1, backgroundColor: '#F8F8FB'
                }}/>
                <FlatList showsVerticalScrollIndicator={true}
                          keyboardShouldPersistTaps='always'
                          data={arrMainData}
                          onEndReachedThreshold={0.5}
                          style={{flex: 1}}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={renderRow}/>
            </View>
        )

    }

    const onTabClick = (value) => {
        setSelectedTab(value)
    }

    const onTabRightClick = (value) => {
        // setSelectedTab(value)
    }

    const onBuyConfirm = () => {
        //trandlist
        navigation.navigate("trandlist")
    }

    const renderHeader = () => {
        return (
            <View style={{marginTop: props.safeAreaInsetsData.top + 15}}>
                <View style={{marginLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[topHeaderTitle]}>{"BTC/USDT"}</Text>
                    <Image resizeMode="contain"
                           source={{uri: 'icon_bottomarrow'}}
                           style={{width: 12, height: 8, marginLeft: 5}}/>
                </View>
                <View style={{
                    width: Constant.screenWidth, height: 1, backgroundColor: '#F8F8FB', marginTop: 10, marginBottom: 15
                }}/>
            </View>
        )
    }

    const listBottomOfMain = () => {
        return (
            <View style={{width: '100%'}}>
                <View style={{
                    width: '100%', height: 26, borderColor: '#F8F8FB', borderWidth: 1, marginTop: 3,
                    justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
                }}>
                    <Text
                        style={[textDropDown, {marginLeft: 6}]}>{"Limit Order"}</Text>
                    <View style={{flex: 1}}/>
                    <Image resizeMode="contain"
                           source={{uri: 'icon_bottomtrade'}}
                           style={{width: 10, height: 10, marginRight: 10}}/>
                </View>

                <DropDownTradeTab
                    title={strLocale("trade.Price")}/>

                <DropDownTradeTab
                    title={strLocale("trade.Amount")}/>


                <View style={{width: '100%', flexDirection: 'row', height: 20, marginTop: 5}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <View style={{
                                flex: 1,
                                marginRight: 4.5,
                                backgroundColor: '#F8F8FB',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={[textPer]}>{strLocale("trade.25%")}</Text>
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <View style={{
                                flex: 1,
                                marginRight: 2.5,
                                backgroundColor: '#F8F8FB',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={[textPer]}>{strLocale("trade.50%")}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <View style={{
                                flex: 1,
                                marginLeft: 2.5,
                                backgroundColor: '#F8F8FB',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={[textPer]}>{strLocale("trade.75%")}</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, marginLeft: 4.5}}>
                            <View style={{
                                flex: 1,
                                backgroundColor: '#F8F8FB',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={[textPer]}>{strLocale("trade.100%")}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <DropDownTradeTab
                    title={strLocale("trade.Total")}/>

                <View style={{width: '100%', marginVertical: 6, flexDirection: 'row'}}>
                    <Text style={[textPer, {color: '#010522'}]}>{strLocale("trade.Balance")}</Text>
                    <View style={{flex: 1}}/>
                    <Text style={[textPer, {color: '#010522'}]}>{strLocale("trade.BalanceBtc", {value: 10000.00})}</Text>
                </View>

                <View style={{width: '100%'}}>
                    <ButtonNew
                        title={strLocale("trade.BUY")}
                        onConfirm={onBuyConfirm}
                        isMainStyle={{
                            backgroundColor: selectedTab === 0 && '#6EBFA7' || '#FA7E7E',
                            marginHorizontal: 0,
                            height: 28,
                            borderRadius: 0
                        }}
                        isTextStyle={{color: '#FFFFFF', fontSize: 12}}/>
                </View>

            </View>
        )
    }

    const renderDataList = () => {
        return (
            <View style={{flex: 1}}>
                <View style={{width: '100%', flexDirection: 'row', marginBottom: 5}}>
                    <Text style={secondHeaderText}>
                        {strLocale("trade.Price")}
                    </Text>
                    <View style={{flex: 1}}/>
                    <Text style={secondHeaderText}>
                        {strLocale("trade.Amount")}
                    </Text>
                </View>

                {
                    arrData.map((objData, index) => {
                        return (
                            <View style={{width: '100%', flexDirection: 'row', marginBottom: 3}}
                                  key={index.toString()}>
                                <Text style={[secondHeaderText, {color: '#FF0000'}]}>
                                    {objData.price}
                                </Text>
                                <View style={{flex: 1}}/>
                                <Text style={secondHeaderText}>
                                    {objData.amount}
                                </Text>
                            </View>
                        )
                    })
                }

                <TouchableOpacity style={{
                    alignItems: 'center', justifyContent: 'center',
                    borderWidth: 1, borderColor: '#F8F8FB',
                    backgroundColor: '#FFF',
                    height: 22, marginBottom: 5
                }}>
                    <Text
                        style={[textTotal]}>{strLocale("trade.6Decimals")}</Text>
                </TouchableOpacity>

                {
                    arrData.map((objData, index) => {
                        return (
                            <View style={{width: '100%', flexDirection: 'row', marginBottom: 3}}
                                  key={index.toString()}>
                                <Text style={[secondHeaderText, {color: '#02A980'}]}>
                                    {objData.price}
                                </Text>
                                <View style={{flex: 1}}/>
                                <Text style={secondHeaderText}>
                                    {objData.amount}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    const renderMainView = () => {
        return (
            <View style={{flex: 1}}>
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <View style={{flex: 1.0, marginLeft: 11, marginRight: 5}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => onTabClick(0)} style={{
                                flex: 1, alignItems: 'center', justifyContent: 'center',
                                backgroundColor: selectedTab === 0 && "#6EBFA7" || "#FCFCFD",
                            }}>
                                <Text
                                    style={[tabButtonText, {color: selectedTab === 1 && '#000000' || '#FFF'}]}>{strLocale("trade.BUY")}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onTabClick(1)} style={{
                                flex: 1, alignItems: 'center', justifyContent: 'center',
                                backgroundColor: selectedTab === 1 && "#FA7E7E" || "#FCFCFD",
                            }}>
                                <Text
                                    style={[tabButtonText, {color: selectedTab === 0 && '#000000' || '#FFF'}]}>{strLocale("trade.SELL")}</Text>
                            </TouchableOpacity>
                        </View>

                        {listBottomOfMain()}
                    </View>
                    <View style={{flex: 1.0, marginLeft: 5, marginRight: 6}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => onTabRightClick(0)} style={{
                                flex: 1, alignItems: 'center', justifyContent: 'center',
                                marginRight: 4,
                                borderWidth: 1, borderColor: '#F8F8FB', flexDirection: 'row',
                                backgroundColor: '#FFF'
                            }}>

                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text
                                        style={[rightTab, {color: '#3D4760'}]}>{strLocale("trade.6Decimals")}</Text>
                                </View>
                                <Image resizeMode="contain"
                                       source={{uri: 'icon_bottomtrade'}}
                                       style={{width: 10, height: 10, marginRight: 10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onTabRightClick(0)} style={{
                                flex: 1, alignItems: 'center', justifyContent: 'center',
                                marginLeft: 4,
                                borderWidth: 1, borderColor: '#F8F8FB', flexDirection: 'row',
                                backgroundColor: '#FFF'
                            }}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text
                                        style={[rightTab, {color: '#3D4760'}]}>{strLocale("trade.LimitOrder")}</Text>
                                </View>
                                <Image resizeMode="contain"
                                       source={{uri: 'icon_bottomtrade'}}
                                       style={{width: 10, height: 10, marginRight: 10}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            width: '100%', height: 1, backgroundColor: '#F8F8FB', marginTop: 3, marginBottom: 5
                        }}/>

                        {renderDataList()}

                    </View>
                </View>
                <View style={{flexDirection: 'row', flex: 1}}>
                    {renderListBottom()}
                </View>

            </View>
        )
    }

    const {
        topHeaderTitle, tabButtonText, textDropDown, textPer, rightTab, secondHeaderText, textTotal,
        textHeaderInData
    } = styles;

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>

            {renderHeader()}

            {renderMainView()}

        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 1,
    },
    topHeaderTitle: {
        color: "#000000",
        fontSize: 16,
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 20
    },
    tabButtonText: {
        fontSize: 14,
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 17,
        marginVertical: 7,
        color: '#FFF'
    },
    textDropDown: {
        fontSize: 8,
        fontFamily: 'System',
        fontWeight: '500',
        lineHeight: 10,
        color: '#000000'
    },
    textPer: {
        fontSize: 10,
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 12,
        color: '#7C7E8F'
    },
    rightTab: {
        fontSize: 8,
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 10,
        color: '#FFF',
        marginVertical: 9
    },
    secondHeaderText: {
        fontSize: 10,
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 12,
        color: '#010522',
    },
    textTotal: {
        fontSize: 10,
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 12,
        color: '#02A980',
    },
    textHeaderInData: {
        color: "#010522",
        fontSize: 10,
        fontFamily: 'System',
        fontWeight: '400',
        lineHeight: 12
    },
});

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault
    };
};

export default connect(mapStateToProps, {})(TradeTab);

