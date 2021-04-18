import React from 'react';
import {Appbar, Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image, TextInput, View, TouchableOpacity} from "react-native";
import {strLocale} from "locale";
const header = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{
            height: 31, elevation: 0, marginTop: props.safeAreaInsetsData.bottom + 10,
            marginHorizontal: 16
        }}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={props.onUser}>
                    <Image resizeMode="contain" source={{uri: 'icon_userprofile'}}
                           style={{width: 18, height: 18}}/>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <View style={{
                        marginHorizontal: 15, height: 31, backgroundColor: '#FFF', borderRadius: 7,
                        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14.5
                    }}>
                        <Image resizeMode="contain" source={{uri: 'icon_search'}}
                               style={{width: 16, height: 16, tintColor: '#C9CED6'}}/>
                        <TextInput style={{marginHorizontal: 12, height: 40}}
                                   placeholder={strLocale("market.SearchToken")}
                                   placeholderTextColor={'#C9CED6'}
                                   autoCorrect={false}
                                   value={''}
                                   autoFocus={false}
                                   returnKeyType={'next'}
                                   onChangeText={(text) => {
                                       // setSearchText(text)
                                   }}/>
                    </View>
                </View>
                <TouchableOpacity onPress={props.onSupport}>
                    <Image resizeMode="contain" source={{uri: 'icon_soundmusic'}}
                           style={{width: 18, height: 18}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default header;
