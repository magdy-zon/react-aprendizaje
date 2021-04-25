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

//Constants and Theme
import { images, theme } from '../../constants';
const { COLORS, FONTS, SIZES } = theme;

// We return the Questionnaire consts
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

  useEffect(() => {
    register('question1');
    register('question2');
    register('question3');
    register('question4');
    register('question5');
  }, [register]);

  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min - 1
  }

  // Render Questionnaire iterating the array
  function renderQuestionnaire() {
    const randomNum = parseInt(randomNumber(1, randomQuestions.length));

    return (
      <View>
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
                style= { styles.borderInput }
                />
            </View>
          );
        })}
        <View>
          <Text style={{
            ...FONTS.body4,
            textAlign: 'left'
          }}>
            { randomQuestions[randomNum].random }
          </Text>
          <Text style={{
            ...FONTS.body4,
            textAlign: 'left',
            marginTop: 10,
          }}>
            Comenta tu respuesta
          </Text>
          <TextInput
            name='question'
            onChangeText= {text => {
              setValue(`question${index}`, text);
            }}
            style= { styles.borderInput }
            />
          </View>
      </View>
    );
  }

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
          {renderQuestionnaire()}
          <TouchableOpacity
            type= 'submit'
            style={ styles.buttonSubmitQuestion }
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
