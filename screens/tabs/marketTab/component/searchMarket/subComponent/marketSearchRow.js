import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constant from "../../../../../../helpers/constant";

const marketSearchRow = (props) => {
    const {container, titleText, subText} = styles;
    const {data, index} = props;
    const {title, price, diffirente, type} = data;

    return (
        <TouchableOpacity onPress={() => props.onCellClick(data, index)} style={container}>
            <Text style={[titleText]}>{title}</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1}}/>
                <Text style={[subText, {color: type === 0 && '#00C087' || '#FF0000'}]}>{price}</Text>
                <Image resizeMode="contain" style={{height: 10, width: 6, marginLeft: 4, marginRight: 13}}
                       source={{uri:  type === 0 && 'icon_up' || 'icon_down'}}/>
                <Text style={[subText, {color: type === 0 && '#00C087' || '#FF0000'}]}>{`${ type === 0 && "+" || "-"}${diffirente}`}</Text>
            </View>
            <Image resizeMode="contain" style={{height: 15, width: 15, marginLeft: Constant.screenWidth * 0.15}}
                   source={{uri: 'icon_favorite'}}/>

            <View
                style={{position: 'absolute', left: 0, right: 0, bottom: -0.5, height: 1, backgroundColor: '#F8F8FB'}}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
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
        lineHeight: 22,
        color: '#000000',
        textAlign: 'right'
    }
})

export default marketSearchRow;
