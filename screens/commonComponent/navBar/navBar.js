import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Constant from "../../../helpers/constant";
import {connect} from "react-redux";

const routingComponent = (props) => {
    const {text, line, image, rightText, leftText, topView} = styles;

    return (
        <View style={{
            height: 60 + props.safeAreaInsetsData.top,
            paddingTop: props.safeAreaInsetsData.top,
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 26,
            backgroundColor: props.bgColor || '#F8F8FB',
        }}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', top: 2}}>
                <View style={topView}>
                    <Text style={rightText}> {props.title} </Text>
                </View>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={props.onPressBack}
                                  hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                >
                    <Image resizeMode="contain" style={image} source={{uri: "icon_backnav"}}/>
                    {
                        !!props.backScreenName &&
                        <Text style={leftText}> {props.backScreenName} </Text>
                    }
                </TouchableOpacity>
                <View style={{flex: 1}}/>
                {
                    props.rightTitle &&
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={props.onPressRight}
                                      hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                    >
                        <Text style={leftText}> {props.rightTitle} </Text>
                    </TouchableOpacity>
                }
                {
                    props.rightImage &&
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={props.onPressRight}
                                      hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                    >
                        <Image resizeMode="contain" source={{uri: props.rightImage}}
                               style={{width: 16, height: 16}}/>
                    </TouchableOpacity>
                }
                {
                    props.rightImage2 &&
                    <TouchableOpacity onPress={props.onPressRight} style={{flexDirection: 'row', alignItems: 'center', marginLeft: 14}}
                                      hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                    >
                        <Image resizeMode="contain" source={{uri: props.rightImage2}}
                               style={{width: 16, height: 16}}/>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: 170
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 19,
        marginVertical: 17
    },
    topView: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightText: {
        textAlign: 'center',
        color: '#010522',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22
    },
    leftText: {
        textAlign: 'center',
        color: '#010522',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 22
    },
    line: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        width: '100%', backgroundColor: Constant.lineBottomColor, height: 1
    },
    image: {
        width: 7,
        height: 15,
        marginRight: 3,
    },
    imageLeft: {
        width: 16,
        height: 17,
        marginRight: 12,
    }
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(routingComponent);
