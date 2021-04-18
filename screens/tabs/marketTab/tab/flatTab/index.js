import React from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Appbar, Avatar, Card, DataTable, useTheme } from "react-native-paper";
import {strLocale} from "locale";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title> <Text>{strLocale("market.Token")}</Text> </DataTable.Title>
          <DataTable.Title numeric> <Text>{strLocale("market.LastPrice")}</Text> </DataTable.Title>
          <DataTable.Title numeric> <Text>{strLocale("market.Changes")}</Text> </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
          <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}} >+ 6.0 % </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
          <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
          <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
          <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
          <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
          <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell> <Text>BTC/USDT</Text> </DataTable.Cell>
          <DataTable.Cell numeric> <Text>50128.0 </Text></DataTable.Cell>
          <DataTable.Cell numeric>
            <View>
              <Text style={{ borderColor: "#008763",borderWidth: 1,backgroundColor: "#008763",color: 'white', padding: 5,width: 75,textAlign: 'center'}}>+ 6.0 % </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}

export default ProfileScreen;
