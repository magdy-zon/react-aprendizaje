import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Home } from './app/screens/';
import { Profile } from './app/screens/';
import { Questionnaire } from './app/screens/';
import { QuestionnaireTeacher } from './app/screens/';
import { Splash } from './app/screens/';

const Stack = createStackNavigator();


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component= { Splash }
          options= {{ headerShown:false }}
        />
        <Stack.Screen
          name='Profile'
          component= { Profile }
          options= {{ headerShown:false }}
        />
        <Stack.Screen
          name='Questionnaire'
          component= { Questionnaire }
          options= {{ headerShown:false }}
        />
        <Stack.Screen
          name='QuestionnaireTeacher'
          component= { QuestionnaireTeacher }
          options= {{ headerShown:false }}
        />
        <Stack.Screen
          name='Home'
          component= { Home }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}
