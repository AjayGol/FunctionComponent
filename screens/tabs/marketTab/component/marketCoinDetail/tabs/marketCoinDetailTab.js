import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native';
import Button from '../../../../../commonComponent/authView/button'
import LastTradesTab from "./component/lastTrades";
import {strLocale} from "locale";
const Tab = createMaterialTopTabNavigator();

function Markets() {
  return (
    <View style={{flex: 1, backgroundColor: 'red', marginTop: -50}}>
        <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#0073F7',
            inactiveTintColor: '#808291',
            scrollEnabled: false,
            indicatorStyle: { backgroundColor: '#0073F7', height: 2 },
            labelStyle: { fontFamily: 'System', fontWeight: '600',fontSize: 13 },
            style: { backgroundColor: 'white', marginBottom: 0, elevation: 0},
        }}
        >
            <Tab.Screen
                name="Feed"
                component={LastTradesTab}
                options={{ tabBarLabel: strLocale("market.OrderBook") }}
            />

            <Tab.Screen
                name="Notifications"
                component={LastTradesTab}
                options={{ tabBarLabel: strLocale("market.LastTrades") }}
            />

        </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({

    btn_view: {
      width:"40%",
      margin: 100,
      marginLeft: '30%'
    },
    button: {
      color: '#008763',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#008763',

    },
    text: {
      color: '#008763'
    },
  })

export default function App() {
  return (
      <Markets />
  );
}
