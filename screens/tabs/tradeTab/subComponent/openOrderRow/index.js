import React, {useState} from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Constant from "../../../../../helpers/constant";

const openOrderRow = (props) => {

    const {titleText, buyButton, titleText2, amountText} = styles;
    const {data} = props;
    const {type, title, date, amount, filled, price, buttonTitle} = data;

    return(
        <View style={{
            marginLeft: 11 ,marginRight: 6, marginTop: 5
        }}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{ backgroundColor: type === 'BUY' && '#6EBFA7' || '#FA7E7E', borderRadius: 10, minWidth: 40}}>
                        <Text style={[buyButton, {color: '#FFF'}]}>{type}</Text>
                    </View>
                    <Text style={[titleText2, {color: '#010522', marginLeft: 6}]}>{title}</Text>
                    <Text style={[titleText2, {color: '#010522', marginLeft: 6, opacity: 0.50, fontSize: 10}]}>{date}</Text>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{ borderColor: '#F9F9F9', borderWidth: 1, borderRadius: 10}}>
                    <Text style={[titleText]}>{buttonTitle || "Cancel"}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 13}}>
                    <Text style={[amountText, {color: '#010522'}]}>{"Amount"}</Text>
                    <Text style={[amountText, {color: '#010522', marginLeft: 9}]}>{amount}</Text>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{flex: 1, flexDirection: 'row-reverse', alignItems: 'center', marginTop: 13}}>
                    <Text style={[amountText, {color: '#010522', marginLeft: 9, marginRight: 15}]}>{amount}</Text>
                    <Text style={[amountText, {color: '#010522'}]}>{"Price"}</Text>
                    <View style={{flex: 1}}/>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 6}}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                    <Text style={[amountText, {color: '#010522'}]}>{"Filled"}</Text>
                    <Text style={[amountText, {color: '#010522', marginLeft: 21}]}>{amount}</Text>
                    <View style={{flex: 1}}/>
                </View>
            </View>

            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, width: Constant.screenWidth, height: 1, backgroundColor: '#F8F8FB'
            }}/>
        </View>

    )
};

const styles = StyleSheet.create({
    textDropDown: {
        fontSize: 8,
        fontFamily: 'System',
        fontWeight: '500',
        lineHeight: 10,
        color: '#000000'
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 8,
        color: '#0073F7',
        textAlign: 'center',
        marginVertical: 5,
        marginHorizontal: 12
    },
    buyButton: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 8,
        color: '#0073F7',
        textAlign: 'center',
        marginVertical: 5,
        marginHorizontal: 9
    },
    titleText2: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 17,
        color: '#0073F7',
    },
    amountText: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 12,
        color: '#010522',
        opacity: 0.5
    },
});



export default openOrderRow;
