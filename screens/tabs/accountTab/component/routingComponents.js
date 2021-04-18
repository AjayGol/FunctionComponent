import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Constant from '../../../../helpers/constant'

const routingComponent = (props) => {
    const {container, touchableButton, text, line, image, rightText, imageLeft} = styles;

    return (
        <View style={container}>
            <TouchableOpacity onPress={() => props.onPressButton(props.id, props.data || '')} style={touchableButton}
                              key={props.keyValue && props.keyValue.toString() || ''}>
                {
                    !!(props.iconLeft && props.iconLeft !== '') &&
                    <Image resizeMode="contain" style={imageLeft} source={{uri: props.iconLeft}}/>
                }
                <Text style={[text, props.textColor && {color: props.textColor}]}> {props.title} </Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={{flex: 1}}/>
                    {
                        !!(props.rightText && props.rightText !== '') &&
                        <Text style={rightText}> {props.rightText} </Text>
                    }
                </View>
                {
                    !!props.iconRight &&
                    <Image resizeMode="contain" style={[image, props.imgPro && props.imgPro]} source={{uri: props.iconRightIcon || "icon_arrow"}}/>
                }
            </TouchableOpacity>
            {
                !!!props.isBottomLine &&
                <View style={line}/>
            }
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
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 19,
        marginVertical: 17
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

export default routingComponent;
