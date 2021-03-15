import React, { useEffect } from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { useForm } from 'react-hook-form';

//Constants
import { images, theme } from '../../constants';
//Theme
const { COLORS, FONTS, SIZES } = theme;

const questions = [
  {
    question: '¿Has usado antes alguna simulación, página web o App para aprender matemáticas?',
    id: 'question1'
  },
  {
    question: '¿Qué herramientas tecnológicas has usado para resolver problemas de matemáticas?',
    id: 'question2'
  },
  {
    question: 'Describe un caso en donde la tecnología haga uso de las matemáticas para resolver problemas de la vida cotidiana.',
    id: 'question3'
  },
  {
    question: '¿Por qué la tecnología te puede ayudar a resolver situaciones de la vida cotidiana?',
    id: 'question4'
  },
  {
    question: '¿Qué entiendes por modelación matemática?',
    id: 'question5'
  }
];

const randomQuestions = [
  {
    random: 'Un hombre quiere tener una cuerda suficientemente larga para atar dos postes separados por 18 m, pero solo tiene trozos de cuerda de 1,5 m de largo. ¿Cuántas de estas piezas necesitará atar juntas para luego atarlas a los postes?'
  },
  {
    random: '476 estudiantes deben ser transportados en autobús a una excursión. Cada autobús tiene capacidad para 35 estudiantes. ¿Cuántos autobuses se necesitan?'
  },
  {
    random: 'Carlos y Karen son amantes de la naturaleza. Contaron cuántos patos hay en el estanque del bosque. Carlos ha contado 18 patos y Karen 21. ¿Cuántos patos hay en el estanque?'
  }
];

const Questionnaire = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    register('question1');
    register('question2');
    register('question3');
    register('question4');
    register('question5');
  }, [register]);

  function randomNumber(min, max) {
      return Math.random() * (max - min) + min - 1;
  }

  function renderRandomQuestion() {
    //
    // return (
    //
    // );
  }

  function renderQuestionnaire() {
    const randomNum = parseInt(randomNumber(1, randomQuestions.length));
    console.log('----');
    console.log(randomNum);
    return (
      <View style= {{ marginVertical: 10 }}>
        { questions.map((item, index) => {
          return (
            <View style= {{ marginVertical: 10, }}>
              <Text style={{
                ...FONTS.body4,
                textAlign: 'left'
              }}>
                { item.question }
              </Text>
              <TextInput
                name='question'
                onChangeText= {text => {
                  setValue(`question${index}`, text);
                }}
                />
            </View>
          );
        })}
        <View style= {{ marginVertical: 10 }}>
            <Text style={{
              ...FONTS.body4,
              textAlign: 'left'
            }}>
              { randomQuestions[randomNum].random }
            </Text>
          </View>
      </View>

    );
  }




  return (
    <SafeAreaView style= { styles.container }>
      <ScrollView>
        <View style={{
          marginTop: '20%',
        }}>
          <Text style={{ ...FONTS.h2 }}>
          ¿Podrías ayudarnos a contestar las siguientes preguntas?</Text>
        </View>
        <View>
          {renderQuestionnaire()}
          <TouchableOpacity
            type= 'submit'
            style={ styles.submitQuestion }
            onPress={
              () => {
                handleSubmit();
                navigation.navigate('Home')
              }
            }
          >
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
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  submitQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 160,
    backgroundColor: COLORS.blue,
    color: COLORS.white,
    borderRadius: SIZES.radius,
  }
});

export default Questionnaire;
