import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native';
import Button from '../../../commonComponent/authView/button'
import FavoritesHomeTab from '../component/favoritesHomeTab'
import MostTradeTab from '../component/mostTrade'
import GrainersTab from '../component/grainers'
import LosersTab from '../component/losers'
import {strLocale} from "locale";

// class FeedScreen extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: 'white'}}>
//
//                 <DataTable>
//                     <DataTable.Header>
//                     <DataTable.Title> <Text>Token</Text> </DataTable.Title>
//                     <DataTable.Title numeric> <Text>Last Price</Text> </DataTable.Title>
//                     <DataTable.Title numeric> <Text>Changes</Text> </DataTable.Title>
//                     </DataTable.Header>
//
//                     <View style={styles.btn_view}>
//                         <Button
//                             theme={{colors: {text: '#ffffff', primary: '#008763'}}}
//                             labelStyle={styles.text}
//                             style={styles.button}
//                             onPress={() => {
//                             navigation.navigate('Login')
//                             }}>
//
//                             Add Favorite
//
//                         </Button>
//                     </View>
//
//                 </DataTable>
//             </View>
//         );
//     }
// }
//
// class NotificationsScreen extends Component {
//     // life-cycle component. when app start it will start
//     componentDidMount() {
//         //console.log('asdasd');
//     }
//
//
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: 'white'}}>
//                 <DataTable>
//                     <DataTable.Header>
//                     <DataTable.Title> <Text>Token</Text> </DataTable.Title>
//                     <DataTable.Title numeric> <Text>Last Price</Text> </DataTable.Title>
//                     <DataTable.Title numeric> <Text>Changes</Text> </DataTable.Title>
//                     </DataTable.Header>
//
//                     <DataTable.Row>
//                     <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//                     <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//                     <DataTable.Cell numeric>
//                         <View>
//                             <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
//                         </View>
//                     </DataTable.Cell>
//                     </DataTable.Row>
//
//                 </DataTable>
//
//             </View>
//         );
//     }
// }
//
// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, backgroundColor: 'white'}}>
//         <DataTable>
//             <DataTable.Header>
//             <DataTable.Title> <Text>Token</Text> </DataTable.Title>
//             <DataTable.Title numeric> <Text>Last Price</Text> </DataTable.Title>
//             <DataTable.Title numeric> <Text>Changes</Text> </DataTable.Title>
//             </DataTable.Header>
//
//             <DataTable.Row>
//             <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//             <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//             <DataTable.Cell numeric>
//                 <View>
//                     <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}} >+ 6.0 % </Text>
//                 </View>
//             </DataTable.Cell>
//             </DataTable.Row>
//
//             <DataTable.Row>
//             <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//             <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//             <DataTable.Cell numeric>
//                 <View>
//                     <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
//                 </View>
//             </DataTable.Cell>
//             </DataTable.Row>
//
//             <DataTable.Row>
//             <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//             <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//             <DataTable.Cell numeric>
//                 <View>
//                     <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
//                 </View>
//             </DataTable.Cell>
//             </DataTable.Row>
//
//             <DataTable.Row>
//             <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//             <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//             <DataTable.Cell numeric>
//                 <View>
//                     <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
//                 </View>
//             </DataTable.Cell>
//             </DataTable.Row>
//
//             <DataTable.Row>
//             <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//             <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//             <DataTable.Cell numeric>
//                 <View>
//                     <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
//                 </View>
//             </DataTable.Cell>
//             </DataTable.Row>
//
//             <DataTable.Row>
//             <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//             <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//             <DataTable.Cell numeric>
//                 <View>
//                     <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
//                 </View>
//             </DataTable.Cell>
//             </DataTable.Row>
//
//             <DataTable.Row>
//             <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
//             <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
//             <DataTable.Cell numeric>
//                 <View>
//                     <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
//                 </View>
//             </DataTable.Cell>
//             </DataTable.Row>
//         </DataTable>
//     </View>
//   );
// }

const Tab = createMaterialTopTabNavigator();

function Markets() {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
        <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#010522',
            inactiveTintColor: '#999BA7',
            scrollEnabled: false,
            indicatorStyle: { backgroundColor: '#000000', height: 2 },
            labelStyle: { fontFamily: 'System', fontWeight: '600',fontSize: 10 },
            style: { backgroundColor: 'white', marginBottom: 0, elevation: 0,},
        }}
        >
            <Tab.Screen
                name="Feed"
                component={FavoritesHomeTab}
                options={{ tabBarLabel: strLocale("home.Favorites") }}

            />
            <Tab.Screen
                name="Notifications"
                component={MostTradeTab}
                options={{ tabBarLabel: strLocale("home.Most Trade") }}
            />
            <Tab.Screen
                name="Profile"
                component={GrainersTab}
                options={{ tabBarLabel: strLocale("home.Gainers") }}
            />
            <Tab.Screen
                name="new"
                component={LosersTab}
                options={{ tabBarLabel: strLocale("home.Losers") }}
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
