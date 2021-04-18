import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Appbar.Header style={styles.container}>

      <Searchbar
      style={styles.searchbar}
      placeholder="Search Token"
      onChangeText={onChangeSearch}
      value={searchQuery}
      />

    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#FFFFFF',
        elevation: 0
    },
    searchbar: {
        width:'100%',
        height: 40 ,
        backgroundColor: 'white',
        elevation: 0,
        borderRadius: 10
    }
});

export default search;
