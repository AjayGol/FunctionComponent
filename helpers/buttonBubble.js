import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";

const buttonBubble = (props) => {

    const {errorTitle} = styles;

    return (
        <View style={[{
            position: 'absolute', right: 51, top: 0, bottom: 0,
            justifyContent: 'center'
        }, props.styleRight && props.styleRight]}>
            <View style={{backgroundColor: '#F84960', padding: 8, borderRadius: 6}}>
                <Text style={errorTitle}>{props.title}</Text>
            </View>
            <View style={{position: 'absolute', right: 0}}>
                <Image resizeMode="contain" source={{uri: 'icon_arrowright'}}
                       style={{width: 6, height: 12, right: -6, tintColor: '#F84960'}}/>
            </View>
        </View>
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
    errorTitle: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: '#FFFFFF',
    }

})

export default buttonBubble;
