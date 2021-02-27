import React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useForm } from 'react-hook-form'

//Constants
import { images, theme } from '../../constants';
//Theme
const { COLORS, FONTS, SIZES } = theme;

const questions = [
  {
    question: '¿Esta es la pregunta 1?'
  },
  {
    question: '¿Esta es la pregunta 2?'
  },
  {
    question: '¿Esta es la pregunta 3?'
  },
  {
    question: '¿Esta es la pregunta 4?'
  }
];

const Questionnaire = ({ navigation }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  function renderQuestionnaire() {
    return (
      <View style= {{ marginVertical: 10, }}>
        {questions.map((item, index) => {
          return (
            <View style= {{ marginVertical: 10, }}>
              <Text style={{
                ...FONTS.body4,
                textAlign: 'left'
              }}>
                { item.question }
              </Text>
              <input
                name='question'
                />
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style= { styles.container }>
      <View style={{
        marginTop: '20%',
      }}>
        <Text style={{ ...FONTS.h2 }}>
        ¿Podrías ayudarnos a contestar las siguientes preguntas?</Text>
      </View>
      <View>
        <form>
          {renderQuestionnaire()}
          <TouchableOpacity
            type= 'submit'
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: 160,
              backgroundColor: COLORS.blue,
              color: COLORS.white,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.navigate('Home') }
          >
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              FINALIZAR
            </Text>
          </TouchableOpacity>
        </form>
      </View>
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
    paddingLeft: '5%',
    paddingRight: '5%'
  }
});

export default Questionnaire;
