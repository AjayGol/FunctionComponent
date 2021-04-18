import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import ButtonBubble from "../../../../helpers/buttonBubble";
import Constant from "../../../../helpers/constant";

const marketRowList = (props) => {

    const {textBold, textDescription, textDescription2, volumeText, buttonText, titlePrice} = styles;
    const {data, styleMain} = props;
    const {titleCompnay, titleSubCompnay, volume, change, changeIncrease, price, subPrice} = data;

    return (
        <TouchableOpacity onPress={() => props.onRowClick(data)}
                          style={[{
                              marginHorizontal: 11, flexDirection: 'row', alignItems: 'center',
                              marginTop: 8,
                          },
                              styleMain && styleMain]}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[textDescription]}>
                        {`${titleCompnay}`}
                    </Text>
                    {/*<Text style={[textDescription2]}>*/}
                    {/*    {titleSubCompnay}*/}
                    {/*</Text>*/}
                </View>
                <View style={{flexDirection: 'row', bottom: 4}}>
                    <Text style={[volumeText]}>
                        {`Vol.`}
                    </Text>
                    <Text style={[volumeText, {marginLeft: 10}]}>
                        {volume}
                    </Text>
                </View>
            </View>
            <View style={{flex: 1}}/>

            <View style={{marginRight: Constant.screenWidth * 0.1}}>
                <Text style={[titlePrice]}>
                    {price}
                </Text>
                {/*<Text style={[titlePrice, {color: '#7E7E7E', opacity: 0.8, fontSize: 8}]}>*/}
                {/*    {subPrice}*/}
                {/*</Text>*/}
            </View>

            <View style={{width: 78, height: 23, backgroundColor: changeIncrease && '#80E0C3' || '#F27F80',
                borderRadius: 4, alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                <Text style={[buttonText]}>
                    {/*{changeIncrease && `+ ${change}` || `- ${change}`}*/}
                    {change}
                </Text>
            </View>

            <View style={{position: 'absolute', left: -10, right: -10, bottom: -0.5, height: 1,
                backgroundColor: '#E2E2E2', opacity: 0.25}}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textBold: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 22,
        color: '#000000',
        textAlign: 'center'
    },
    textDescription2: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 22,
        color: '#7E7E7E',
        textAlign: 'center',
        opacity: 0.8
    },
    volumeText: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 8,
        lineHeight: 22,
        color: '#7E7E7E',
        textAlign: 'center',
        opacity: 0.8,
    },
    buttonText: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 22,
        color: '#FFFFFF',
    },
    titlePrice: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 12,
        color: '#00C087',
        textAlign: 'right'
    }
})

export default marketRowList;
