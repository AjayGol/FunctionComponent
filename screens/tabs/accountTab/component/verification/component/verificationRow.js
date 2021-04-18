import React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";

const VerificationRow = (props) => {
    const navigation = useNavigation();

    const {main, text} = styles;

    return (
        <TouchableOpacity style={[main]} key={props.keyValue && props.keyValue.toString() || ''}>
            <View style={{flex: 1, marginLeft: 5}}>
                <Text style={text}>{props.title}</Text>
                <Text style={text}>{props.description}</Text>
            </View>
            <View style={{height: '100%', alignItems: 'center'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image resizeMode="contain" style={{height: 35, width: 35}} source={{uri: props.icondoneright}}/>
                </View>
            </View>
        </TouchableOpacity>

    );

};

const styles = StyleSheet.create({
    main: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 10,
        marginTop: 28,
        marginHorizontal: 16,
        paddingHorizontal: 18,
        paddingVertical: 18,
        flexDirection: 'row'
    },
    text: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 31,
        color: '#000000',
    },

})

export default VerificationRow;
