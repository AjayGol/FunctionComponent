import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import ButtonBubble from "../../../../helpers/buttonBubble";

const walletRowTwoText = (props) => {

    const {textBold, textDescription} = styles;
    const {title, centerText, centerText2, styleMain} = props;

    return (
        <TouchableOpacity onPress={props.onSearchButton}
                          style={[{marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'}, styleMain && styleMain]}>
            <Text style={[textDescription]}>
                {title}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 0.4}}/>
                <Text style={[textBold]}>
                    {centerText}
                </Text>
                <Text style={[textDescription, {marginLeft: 5}]}>
                    {centerText2}
                </Text>
                <View style={{flex: 1}}/>
            </View>
            <Image resizeMode="contain" source={{uri: 'icon_cellright'}}
                   style={{width: 15, height: 10}}/>
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
        fontSize: 16,
        lineHeight: 22,
        color: '#000000',
        textAlign: 'center'
    }
})

export default walletRowTwoText;
