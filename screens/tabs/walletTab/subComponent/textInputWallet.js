import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import ButtonBubble from "../../../../helpers/buttonBubble";

const textInputWallet = (props) => {

    const [keyboardType] = useState(props.keyboardType || 'email-address')

    const {container, textStyle, titleHeader} = styles;
    const {
        image,
        placeHolder,
        onButtonRightClick,
        onButtonRightClick2,
        textInput,
        setTextInput,
        isDisableTextTouch,
        image2,
        imageText
    } = props;

    const renderAlertIcon = () => {
        return (
            <View style={{height: '100%', justifyContent: 'center'}}>
                <Image resizeMode="contain" source={{uri: 'icon_alerticon'}}
                       style={{width: 16, height: 16, marginRight: 12}}/>
            </View>
        )
    }

    return (
        <View style={[container, props.style && props.style]}
              onPress={() => props.onPressButton(props.id)}>
            {
                props.titleHeader &&
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={titleHeader}>{props.titleHeader}</Text>
                    <View style={{width: 1, height: 20, backgroundColor: '#A3A3A3', marginRight: 4}}/>
                </View>
            }
            <TextInput style={textStyle}
                       autoCorrect={false}
                       value={textInput.value}
                       editable={isDisableTextTouch ? false : true}
                       autoFocus={false}
                       autoCapitalize='none'
                       returnKeyType={'next'}
                       placeholder={placeHolder}
                       placeholderTextColor={"#7E7E7E"}
                       keyboardType={keyboardType}
                       onChangeText={(text) => {
                           setTextInput({value: text, error: ''})
                       }}/>
            {
                textInput.error !== '' &&
                renderAlertIcon()
            }
            <TouchableOpacity onPress={onButtonRightClick}>
                {
                    imageText &&
                    <Text style={titleHeader}>{imageText}</Text>
                    ||
                    <Image resizeMode="contain" style={{height: 20, width: 20, marginRight: 9}} source={{uri: image}}/>
                }

            </TouchableOpacity>

            {
                image2 &&
                <TouchableOpacity onPress={onButtonRightClick2}>
                    <Image resizeMode="contain" style={{height: 20, width: 20, marginRight: 9}} source={{uri: image2}}/>
                </TouchableOpacity>
            }


            {
                textInput.error !== '' &&
                <ButtonBubble
                    styleRight={{right: 65}}
                    title={textInput.error}
                />
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        height: 43,
        borderWidth: 0,
        borderColor: '#DFE2E5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F8F8FB'
    },
    textStyle: {
        flex: 1,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#000000',
        marginTop: -5,
        marginHorizontal: 15
    },
    titleHeader: {
        fontFamily: 'System',
        fontWeight: 'normal',
        marginHorizontal: 8,
        fontSize: 14,
        lineHeight: 31,
        color: '#A3A3A3',
    }
})

export default textInputWallet;
