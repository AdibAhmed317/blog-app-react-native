import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <TextInput
        style={styles.title}
        placeholder='Title'
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.content}
        placeholder='Note'
        value={content}
        onChangeText={text => setContent(text)}
        multiline={true}
      />
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() =>
            addBlogPost(title, content, () => navigation.navigate('Index'))
          }
        >
          <Text style={styles.addBtn}>Add note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    borderWidth: 0.1,
    borderColor: 'grey',
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 22,
    marginBottom: 7,
    margin: 3,
  },
  content: {
    fontSize: 18,
    borderColor: 'grey',
    padding: 5,
    margin: 5,
  },
  btnView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addBtn: {
    fontSize: 18,
    color: '#050A30',
    borderRadius: 5,
    borderWidth: 0.5,
    paddingHorizontal: 5,
    borderColor: '#050A30',
  },
});
