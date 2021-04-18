import React, {useState} from 'react';
import { ScrollView, StatusBar, View } from "react-native";
import Search from "./subComponent/search";
import FavoriteTab from './tab/favoriteTab';
import BtcTab from './tab/btcTab';
import AltsTab from './tab/altsTab';
import FlatTab from './tab/flatTab';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar";
import {useNavigation} from "@react-navigation/native";
import {connect} from "react-redux";
import {strLocale} from "locale";

const Tab = createMaterialTopTabNavigator();

const MarketTab = (props) => {
    const navigation = useNavigation();

    const [initPage, setInitPage] = useState(0);
    const [selectedAction, setSelectedAction] = useState(0);

    const onTabChange = (tab) => {
        setSelectedAction(tab.i)
    };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF'}}>
      {/*<StatusBar barStyle = "dark-content" backgroundColor = "#FFFFFF" color = "#000000" />*/}
      {/*<Search />*/}
      {/*<Markets />*/}
        <View style={{width: '100%', height: props.safeAreaInsetsData.bottom + 10}}/>
        <ScrollableTabView
            initialPage={initPage}
            tabBarTextStyle={{
                fontSize: 15, alignSelf: 'center', color: 'red',
                fontFamily: 'System',
                fontWeight: 'normal',
            }}
            tabBarBackgroundColor={"#FFF"}
            onChangeTab={(tab) => onTabChange(tab)}
            tabBarInactiveTextColor={'#999BA7'}
            tabBarActiveTextColor={'#010522'}
            prerenderingSiblingsNumber={0}
            renderTabBar={() =>
                <TabBar underlineColor={'#010522'}
                        style={{borderBottomColor: '#F8F8FB'}}
                        tabBarTextStyle={{
                            fontSize: 15,
                            fontFamily: 'System',
                            fontWeight: 'normal',
                        }}/>}>
            <FavoriteTab {...props} tabLabel={{label: strLocale("market.Favorites")}}
                           navigationProps={navigation}/>
            <BtcTab {...props} tabLabel={{label: strLocale("market.BTC")}}
                         navigationProps={navigation}/>
            <AltsTab {...props} tabLabel={{label: strLocale("market.ALTS")}}
                         navigationProps={navigation}/>
            <FlatTab {...props} tabLabel={{label: strLocale("market.FLAT")}}
                         navigationProps={navigation}/>
        </ScrollableTabView>

      {/*<ScrollView>*/}
      {/*  <Tab.Navigator*/}
      {/*    initialRouteName="Feed"*/}
      {/*    tabBarOptions={{*/}
      {/*      activeTintColor: '#000000',*/}
      {/*      scrollEnabled: false,*/}
      {/*      indicatorStyle: { backgroundColor: '#008763' },*/}
      {/*      labelStyle: { fontSize: 12 },*/}
      {/*      style: { backgroundColor: 'white', marginBottom: 0, elevation: 0},*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Tab.Screen*/}
      {/*      name="Feed"*/}
      {/*      component={FeedTab}*/}
      {/*      options={{ tabBarLabel: 'BTC' }}*/}
      {/*    />*/}
      {/*    <Tab.Screen*/}
      {/*      name="Notifications"*/}
      {/*      component={NotificationTab}*/}
      {/*      options={{ tabBarLabel: 'ETH' }}*/}
      {/*    />*/}
      {/*    <Tab.Screen*/}
      {/*      name="Profile"*/}
      {/*      component={ProfileTab}*/}
      {/*      options={{ tabBarLabel: 'USDT' }}*/}
      {/*    />*/}
      {/*    <Tab.Screen*/}
      {/*      name="new"*/}
      {/*      component={ProfileTab}*/}
      {/*      options={{ tabBarLabel: 'FIAT' }}*/}
      {/*    />*/}

      {/*  </Tab.Navigator>*/}
      {/*</ScrollView>*/}

    </View>
  );
};

const mapStateToProps = state => {
    return {
        safeAreaInsetsData: state.user.safeAreaInsetsDefault,
    };
};

export default connect(mapStateToProps, {})(MarketTab);

