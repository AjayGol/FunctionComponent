import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Constant from '../../../../../../../helpers/constant'
import { strLocale } from "locale";

const addressComponent = (props) => {
    const {container, touchableButton, text, line, image, rightText, imageLeft, id} = styles;

    return (
        <View style={container} key={id && id.toString() || ''} >
            <TouchableOpacity onPress={() => props.onPressButton(props.id)} style={touchableButton}>
                <View style={{width: '100%'}}>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={[text, props.textColor && {color: props.textColor}]}> {props.title} </Text>
                        <View style={{flex: 1}}/>
                        <TouchableOpacity onPress={() => props.onCancelButton(props.id)}>
                        <Text style={[text, {color: "#0073F7"}]}> {strLocale("security.Cancel")} </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[text, props.textColor && {color: props.textColor}]}> {props.description} </Text>
                    <Text  style={[text, props.textColor && {color: props.textColor}]}
                           numberOfLines={1}>
                        {props.address}
                    </Text>
                    <View style={{width: '100%', marginTop: 19, height: 2, backgroundColor: '#DFE2E5'}}></View>
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    touchableButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 19,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 31,
    },
    rightText: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 16,
        marginRight: 5,
        color: '#000000',
        opacity: 0.5
    },
    line: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        width: '100%', backgroundColor: Constant.lineBottomColor, height: 1
    },
    image: {
        width: 7,
        height: 15,
        marginRight: 10,
    },
    imageLeft: {
        width: 16,
        height: 17,
        marginRight: 12,
    }
})

export default addressComponent;
