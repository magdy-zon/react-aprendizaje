import React, { useEffect } from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useForm } from 'react-hook-form';
import { createStore } from 'redux';
import Reducer from '../../../app/reducer/Reducers';
import { changeToHome } from '../../../app/reducer/Actions';
import Student from './Student';
import Professor from './Professor';

const store = createStore(Reducer);

//Constants and Theme
import { images, theme } from '../../constants';
const { COLORS, FONTS, SIZES } = theme;

const Questionnaire = ({ navigation }) => {
  console.log('-----state 3');
  const actual = store.getState();
  console.log(actual);

  return (
    <SafeAreaView>
      <ScrollView style={{
        paddingHorizontal: 20,
        paddingTop:60,
        paddingBottom: 40
      }}>
        <View>
          <Text style={{ ...FONTS.h2 }}>
          Ayúdanos respondiendo las siguientes preguntas
          </Text>
        </View>
        <View>
          <Student />
          <Professor />
          <TouchableOpacity
            type= 'submit'
            style={ styles.buttonSubmitQuestion }
            onPress={
              () => {
                handleSubmit();
                navigation.navigate('Home');
              }
            }>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              FINALIZAR
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonNext: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
    marginLeft: '5%',
    marginRight: '5%',
    marginHorizontal: 10
  },
  buttonSubmitQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '100%',
    backgroundColor: COLORS.blue,
    color: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: 100,
  },
  borderInput: {
    borderColor: COLORS.borderInput,
    borderRadius: SIZES.radius,
    borderWidth: 1.5,
    height: 60,
    marginTop: 5,
    marginBottom: 5,
  }
});

export default Questionnaire;
