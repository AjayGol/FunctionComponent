import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const walletRow = (props) => {
    const {container, titleText, subText} = styles;
    const {data} = props;
    const {title, subTitle, price, type} = data;

    return (
        <View style={container}>
            <View sty={{flex: 1, backgroundColor: 'red'}}>
                <Text style={[titleText]}>{title}</Text>
                <Text style={[subText]}>{subTitle}</Text>
            </View>
            <View style={{flex: 1}}/>
            <Text style={[title, {color: type === '1' && '#00C087' || '#FF0000'}]}>{price}</Text>
            <View
                style={{position: 'absolute', left: 0, right: 0, bottom: -0.5, height: 1, backgroundColor: '#F8F8FB'}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 17,
        paddingBottom: 19,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: '#000000'
    },
    subText: {
        fontFamily: 'System',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 15,
        color: '#000000',
        marginTop: 3
    }
})

export default walletRow;
