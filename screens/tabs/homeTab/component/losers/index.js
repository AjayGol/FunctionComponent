import React, {useEffect, useState} from 'react';
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
import PickerController2 from "../../../../commonComponent/pickerController/pickAddress"
import {cloneDeep} from "lodash";
import MarketRow from "../../../marketTab/subComponent/marketRowList";
import {useNavigation} from "@react-navigation/native";
import {strLocale} from "locale";
import {connect} from "react-redux";
import {losersList} from "../../../../../actions/homeActions";

let currentPickerValue = '';

function losers(props) {
    const navigation = useNavigation();

    useEffect(() => {
        props.losersList();
    }, []);

    const [isLowPrize, setIsLowPrize] = useState('Low Price');

    const onRowClick = (data) => {
        navigation.navigate("marketcoindetail",{
            data: data
        })
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

    const getCategoryPickerReturn = (data) => {
        return [{label: strLocale("market.LowPrice"), value: strLocale("market.LowPrice")}, {label: strLocale("market.HighPrice"), value: strLocale("market.HighPrice")}];
    };

    const {titleText, pickerView, headerLeft, headerMedium, headerRight, imgIcon} = styles;

    return (
        <View style={{flex: 1, backgroundColor: 'white', marginTop: 2}}>
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
                </View>

                <View style={headerRight}>
                    <Text style={[titleText, {marginRight: 5}]}>{strLocale("market.Change")}</Text>
                    <Image resizeMode="contain" source={{uri: 'icon_priceupdown'}}
                           style={{width: 8, height: 10, marginTop: 3}}/>
                </View>
            </View>

            <FlatList showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps='always'
                      data={props.losersArr || []}
                      onEndReachedThreshold={0.5}
                      style={{flex: 1}}
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
    }
});

const mapStateToProps = state => {
    return {
        losersArr: state.home.losersArr || [],
    };
};

export default connect(mapStateToProps, {
    losersList
})(losers);
