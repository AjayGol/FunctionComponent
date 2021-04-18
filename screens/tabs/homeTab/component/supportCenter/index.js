import * as React from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import {
  Avatar,
  Paragraph,
  Card,
  useTheme,
} from 'react-native-paper';
import {useState} from "react";

const SupportCenter = () => {
  const {
    colors: { background },
  } = useTheme();

  const listData = [
    { id: 0, title: 'Submit a request', description: "Contact our supportteam forquick assistance." },
    { id: 1, title: 'FAQs', description: "List of the most requently asked questions" },
    { id: 2, title: 'Beginners guide', description: "Helpful resources for everyhing you need to know to get start" },
    { id: 3, title: 'API Documentation', description: "Get the complete documentation for the API" },
    { id: 4, title: 'Join the community', description: "Find asnwers, ask questions and connect with our community" },
    { id: 5, title: 'List a coin', description: "List your coin on BitUBU" },
  ];

  const [arrList, setArrList] = useState(listData);

  const onPressList = (id = 0) => {
    Alert.alert('The City is Long Pressed');
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: background }]}>
      {
        arrList.map((objData, index) => {
          let headerTitle = Object.keys(objData);
          return (
              <Card
                  style={styles.card}
                  onPress={() => onPressList(objData.id)}
              >
                <Card.Title
                    title={objData.title}
                    left={(props) => <Avatar.Icon {...props} icon="angle-right" backgroundColor="#008763" />}
                />
                <Card.Content>
                  <Paragraph>
                    {objData.description}
                  </Paragraph>
                </Card.Content>
              </Card>
          )
        })
      }
    </ScrollView>
  );
};

SupportCenter.title = 'Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 1,
  },
  card: {
    paddingHorizontal: 20
  },
});

export default SupportCenter;
