import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Constant from '../../../../helpers/constant'

const headerProfile = (props) => {
    const {container, line, image, textTop, textBottom, imageView} = styles;

    return (
        <View style={{backgroundColor: '#F8F8FB'}}>
            <View style={container}>
                <View resizeMode="contain" style={imageView}>
                    <Image resizeMode="contain" style={image} source={{uri: "icon_profilelogotemp"}}/>
                </View>
                <View style={{flex: 1, marginLeft: 16}}>
                    <Text style={textTop}> {props.title} </Text>
                    <Text style={textBottom}> {props.bottomTitle} </Text>
                </View>
                <View style={line}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20, flexDirection: 'row',
        paddingBottom: 23, paddingTop: 20,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: 'white'
    },
    textTop: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 22,
        color: '#000000',
    },
    textBottom: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14,
        color: '#000000',
        opacity: 0.4,
        marginTop: 3
    },
    line: {
        position: 'absolute',
        left: 20, right: 0, bottom: 0,
        width: '100%', backgroundColor: Constant.lineBottomColor, height: 1
    },
    imageView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C9C9C9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 20,
        height: 20,
    }
})

export default headerProfile;
