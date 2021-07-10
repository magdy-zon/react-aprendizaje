import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducer from './app/reducer/Reducers';
import { Home } from './app/screens/';
import { Profile } from './app/screens/';
import { Questionnaire } from './app/screens/';
import { Splash } from './app/screens/';
import { ActivityTwo } from './app/screens/';

const Stack = createStackNavigator();
// Manage Reducer and import actions
import {
  changeToProfile,
  changeToQuizz,
  changeToHome
} from './app/reducer/Actions'
const store = createStore(Reducer);

// console.log('-----state');
// console.log(store.getState());
// store.dispatch(changeToQuizz('QUESTIONNAIRE', 'PROFESSOR'));
// console.log('-----state');
// console.log(store.getState());
// store.dispatch(changeToHome('HOME', 'STUDENT'));
// console.log('-----state');
// console.log(store.getState());

const App = () => {

  return (
    <Provider store={store}>
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
            name='Home'
            component= { Home }
            options={{
              headerLeft: null,
              headerTitleStyle: { textAlign: 'center'},
              title: 'Inicio'}}
          />
          <Stack.Screen
            name='Actividad 2'
            component= { ActivityTwo }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default () => {
  return <App />
}
