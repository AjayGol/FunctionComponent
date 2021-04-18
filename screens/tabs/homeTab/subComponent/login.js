import React from 'react';
import { View, Text, Button } from 'react-native';

const login = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#FFFFFF',height: 170}}>
        <Text style={{height: 50,textAlign: 'center', lineHeight: 80,fontSize: 24,color: '#010522'}}>
            Trade. Invest. Earn
        </Text>
        <View style={[{width:"40%", margin: 40, marginLeft: '30%' }]}>
          <Button title="Get Start" onPress={() => {
            navigation.navigate({
              routeName: 'Loginscreen'
            });
          }} />
        </View>
    </View>
  );
};


export default login;