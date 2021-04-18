import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from "react-native";
import {connect} from "react-redux";
import Constant from "../../../../../helpers/constant";

const DropDownTradeTab = (props) => {

    const {title} = props;

    return(
        <View style={{
            width: '100%', height: 26, borderColor: '#F8F8FB', borderWidth: 1, marginTop: 4,
            justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
        }}>
            <Image resizeMode="contain"
                   source={{uri: 'icon_subtrade'}}
                   style={{width: 8, height: 20, marginHorizontal: 9}}/>
            <View style={{height: '100%', width: 1, backgroundColor: '#F8F8FB'}}/>
            <TextInput style={{flex: 1, textAlign: 'center', fontSize: 8, fontFamily: 'System', fontWeight: '500', marginTop: Constant.isANDROID && -10 || 0}}
                       placeholder={title}
                       placeholderTextColor={"#010522"}
                       autoCorrect={false}
                       autoFocus={false}
                       returnKeyType={'next'}
                       maxLength = {15}
                       onChangeText={(text) => {
                       }}/>
            <View style={{height: '100%', width: 1, backgroundColor: '#F8F8FB'}}/>
            <Image resizeMode="contain"
                   source={{uri: 'icon_plustrade'}}
                   style={{width: 8, height: 20, marginHorizontal: 9}}/>
        </View>
    )
};

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(DropDownTradeTab);
