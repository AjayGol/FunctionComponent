import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import ButtonBubble from "../../../../helpers/buttonBubble";
import Constant from "../../../../helpers/constant";

const copyPastRow = (props) => {

    const [keyboardType] = useState(props.keyboardType || 'email-address')

    const {titleCopyButton, titleLink, mainlink, linkText} = styles;
    const {title, mainText, styleMain} = props;

    return (
        <View style={[mainlink, styleMain && styleMain]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={titleLink}>{title}</Text>
                <View style={{flex: 1}}/>

                <TouchableOpacity onPress={() => props.onCopy(mainText)} style={{
                    marginRight: 14,
                    backgroundColor: '#F8F8FB',
                    height: 22,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Image resizeMode="contain" source={{uri: 'icon_copypast2'}}
                           style={{width: 9, height: 9, marginLeft: 6}}/>
                    <Text style={[titleCopyButton, {
                        marginLeft: 6,
                        marginRight: 4,
                        color: '#C9CED6'
                    }]}>{"Copy Address"}</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '100%'}}>
                <Text style={linkText}>{mainText}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainlink: {
        borderColor: '#DFE2E5',
        marginTop: 21,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    titleLink: {
        lineHeight: 22,
        marginLeft: 12,
        fontSize: 12,
        fontWeight: '600',
        color: '#000000',
        maxWidth: Constant.screenWidth - 50
    },
    titleCopyButton: {
        fontFamily: 'System',
        fontWeight: '500',
        fontSize: 8,
        lineHeight: 22
    },
    linkText: {
        marginTop: 3,
        marginLeft: 12,
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        lineHeight: 31,
        maxWidth: Constant.screenWidth - 50
    },
})

export default copyPastRow;
