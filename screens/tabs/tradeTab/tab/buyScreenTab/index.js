import React from 'react';
import { StatusBar, TextInput, View } from "react-native";

const Index = () => {
  const [value, onChangeText] = React.useState('Price (USDT)');
  const [value1, onChangeText1] = React.useState('Amount (BTC)');

  return (
    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
      <TextInput
        style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center', marginTop: 5 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TextInput
        style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center', marginTop: 5 }}
        onChangeText={text => onChangeText1(text)}
        value={value1}
      />

    </View>

  );
};

export default Index;
