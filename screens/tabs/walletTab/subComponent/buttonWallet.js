import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const buttonWallet = (props) => {
    const {container, text} = styles;
    const {image, title} = props;

    return (
        <TouchableOpacity style={[container, props.style && props.style]}
                          onPress={() => props.onPressButton(props.id)}>
            <Image resizeMode="contain" style={{height: 20, width: 20}} source={{uri: image}}/>
                <Text style={[text]}> {title} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 136,
        height: 40,
        borderWidth: 1,
        borderColor: '#C3D3D4',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        marginLeft: 12,
        color: '#010522'
    }
})

export default buttonWallet;
