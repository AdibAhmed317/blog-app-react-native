import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import BlogContext from '../context/BlogContext';

const indexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>This is index screen</Text>
      <Button title='Add Blog' onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default indexScreen;

const styles = StyleSheet.create({});
