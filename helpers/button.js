import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from "react-native";

const ButtonNew = (props) => {

    const {main, text} = styles;

    return (
        <TouchableOpacity onPress={props.onConfirm}
                          disabled={props.isDisable && props.isDisable || false} style={[main, props.isMainStyle && props.isMainStyle]}>
            {
                props.isActivityIndicator &&
                <ActivityIndicator color={"#FFF"}/>
                ||
                <Text style={[text, props.isTextStyle && props.isTextStyle]}>{props.title}</Text>
            }
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#E4E7ED',
        borderRadius: 4,
        marginHorizontal: 20,
        height: 56,
        textAlign: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 16,
        color: '#000000',
        textAlign: 'center'
    },

})

export default ButtonNew;
