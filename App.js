import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from './src/context/BlogContext';
import { Feather, EvilIcons } from '@expo/vector-icons';

import indexScreen from './src/screens/indexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen
            name='Index'
            component={indexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <Feather
                    style={{ margin: 5, justifyContent: 'center' }}
                    name='plus'
                    size={35}
                    color='black'
                  />
                </TouchableOpacity>
              ),
              headerTitleAlign: 'center',
              title: 'Notes',
            })}
          />
          <Stack.Screen
            name='Show'
            component={ShowScreen}
            // options={{
            //   title: 'Show Note',
            //   headerTitleAlign: 'center',
            //   justifyContent: 'center',
            // }}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <EvilIcons
                    style={{ margin: 5, justifyContent: 'center' }}
                    name='pencil'
                    size={35}
                    color='black'
                  />
                </TouchableOpacity>
              ),
              headerTitleAlign: 'center',
              title: 'Notes',
            })}
          />
          <Stack.Screen
            name='Create'
            component={CreateScreen}
            options={{ title: 'Create Note', headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
