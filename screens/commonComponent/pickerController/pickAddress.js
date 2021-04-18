import React, {Component, useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView, TouchableOpacity, Image,
} from "react-native";
import {connect} from 'react-redux';
import RNPickerSelect from "react-native-picker-select";


const pickerController = (props) => {
    const {itemsData, type} = props;
    return (
        <RNPickerSelect
            placeholder={{}}
            style={{
                viewContainer: {backgroundColor: 'transparent', flex: 1},
                placeholder: {opacity: 0},
                inputAndroid: {opacity: 0},
                inputIOS: {
                    opacity: 0,
                    height: '100%',
                },
            }}
            Icon={() => {
                return null;
            }}
            items={itemsData}
            onValueChange={(value) => props.onValueChange(value, type)}
            onOpen={props.onOpenPicker}
            onDonePress={() => props.onFilterUpdate(type)}
        />
    );
}


const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(pickerController);
