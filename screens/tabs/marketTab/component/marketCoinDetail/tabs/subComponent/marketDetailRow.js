import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

const marketDetailRow = (props) => {

    const {textDescription, textDescription2, viewSlider, viewSlider2} = styles;
    const {data, styleMain} = props;
    const {amount, priceUp, valuePer} = data;

    return (
        <TouchableOpacity onPress={props.onRowClick}
                          style={[{
                              marginHorizontal: 11, flexDirection: 'row', alignItems: 'center',
                              marginTop: 8,
                          },
                              styleMain && styleMain]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                    style={viewSlider}>
                    <View style={{width: valuePer, height: '100%', backgroundColor: '#F2FCF9'}}/>
                </View>
                <Text style={[textDescription]}>
                    {amount}
                </Text>
                <View style={{flex: 1}}/>
                <Text style={[textDescription2, {marginRight: 10}]}>
                    {priceUp}
                </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={viewSlider2}>
                    <View style={{width: valuePer, height: '100%', backgroundColor: '#F9EEEE'}}/>
                </View>
                <Text style={[textDescription, {color: '#EE0000', marginLeft: 10}]}>
                    {amount}
                </Text>
                <View style={{flex: 1}}/>
                <Text style={[textDescription2, {color: '#010522'}]}>
                    {priceUp}
                </Text>
            </View>

            <View style={{
                position: 'absolute', left: -10, right: -10, bottom: -0.5, height: 1,
                backgroundColor: '#E2E2E2', opacity: 0.25
            }}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewSlider: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flexDirection: 'row-reverse'
    },
    viewSlider2: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 31,
        color: '#010522',
        textAlign: 'center'
    },
    textDescription2: {
        fontFamily: 'System',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 31,
        color: '#00C087',
        textAlign: 'center',
        opacity: 0.8
    }
})

export default marketDetailRow;
