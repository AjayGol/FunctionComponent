import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const walletRow = (props) => {
    const {container, titleText, subText} = styles;
    const {data, index} = props;
    const {title, subTitle, price} = data;

    return (
        <TouchableOpacity onPress={() => props.onCellClick && props.onCellClick(data, index)} style={container}>
            <Text style={[titleText]}>{title}</Text>
            <Text style={[subText]}>{subTitle}</Text>
            <View style={{flex: 1}}/>
            {
                props.balanceHideShow &&
                <Text style={[title]}>{price}</Text>
                ||
                <Text style={[title]}>{"******"}</Text>
            }

            <View style={{position: 'absolute', left: 0, right: 0, bottom: -0.5, height: 1, backgroundColor: '#F8F8FB'}}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 26,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#000000'
    },
    subText: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 17,
        color: '#000000',
        marginLeft: 14
    }
})

export default walletRow;
