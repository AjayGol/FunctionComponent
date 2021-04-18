import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity, TextInput, Keyboard
} from 'react-native';
import NavBar from "../../../../commonComponent/navBar/navBar";
import {useNavigation, useRoute} from "@react-navigation/native";
import {connect} from "react-redux";
import Clipboard from '@react-native-community/clipboard';
import SearchList from "./component/searchList"
import {strLocale} from "locale";

const widthdrawal = (props) => {
    const navigation = useNavigation();
    const {params} = useRoute();

    const [searchText, setSearchText] = useState("")
    const [arrCoin, setArrCoin] = useState([{
        title: 'BTC/USDT',
        price: '8.863,10',
        type: 0,
        diffirente: 0.25
    }, {
        title: 'BTC/USDT',
        price: '8.863,10',
        type: 1,
        diffirente: 0.25
    }, {
        title: 'BTC/USDT',
        price: '8.863,10',
        type: 0,
        diffirente: 0.25
    }, {
        title: 'BTC/USDT',
        price: '8.863,10',
        type: 0,
        diffirente: 0.25
    }])

    const onPressBack = (id) => {
        navigation.goBack()
    }

    const onCopy = () => {
        Clipboard.setString('MML7G6DQOVAL2MY7VH53O7SWONN4ZNLH');
    }

    const onCancel = () => {
        Keyboard.dismiss();
    }

    const onPressRight = () => {

    }

    const onCellClick = (data, index) => {
        navigation.goBack()
        params.addedFav()
        // if (params.title === 'Deposit') {
        //     if (index !== 0){
        //         navigation.navigate("trydeposit")
        //     }else{
        //         navigation.navigate("deposit")
        //     }
        // } else if (params.title === 'Withdraw') {
        //     if (index !== 0){
        //         navigation.navigate("trywithdrawal")
        //     }else{
        //         navigation.navigate("withdrawal")
        //     }
        // }
    }

    const {container, titleText, textDescription} = styles;

    const renderSearch = () => {
        return (
            <View style={{marginHorizontal: 5, height: 40, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <View style={{
                        height: '100%', flexDirection: 'row', marginRight: 5, backgroundColor: '#F8F8FB',
                        alignItems: 'center', paddingHorizontal: 18.5, borderRadius: 7
                    }}>
                        <Image resizeMode="contain" source={{uri: 'icon_search'}}
                               style={{width: 16, height: 16, tintColor: '#C9CED6'}}/>
                        <TextInput style={{marginHorizontal: 12, height: '100%'}}
                                   placeholder={strLocale("market.SearchToken")}
                                   placeholderTextColor={"#C9CED6"}
                                   autoCorrect={false}
                                   // value={searchText}
                                   autoFocus={false}
                                   returnKeyType={'next'}
                                   // onChangeText={(text) => {
                                   //     setSearchText(text)
                                   // }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={onCancel} style={{
                    height: '100%', width: 69, backgroundColor: '#F8F8FB', alignItems: 'center',
                    justifyContent: 'center', borderRadius: 7
                }}>
                    <Text style={[titleText]}>{strLocale("market.Cancel")}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <NavBar title={""}
                    backScreenName={"Market"}
                    rightTitle={" "}
                    onPressBack={onPressBack}
                    bgColor={"#FFF"}
                    onPressRight={onPressRight}/>

            {renderSearch()}

            <SearchList
                data={arrCoin}
                balanceHideShow={true}
                onCellClick={onCellClick}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    textDescription: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#000000',
        textAlign: 'center'
    },
    titleText: {
        fontFamily: 'System',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#C9CED6',
        textAlign: 'center'
    }
})

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(widthdrawal);
