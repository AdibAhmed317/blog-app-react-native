import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Context } from '../context/BlogContext';

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  title: {
    padding: 5,
    margin: 5,
    fontSize: 25,
  },
  content: {
    padding: 5,
    margin: 5,
    fontSize: 18,
  },
});
