import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { createStore } from 'redux';
import Reducer from '../../../app/reducer/Reducers';
import { changeToQuizz } from '../../../app/reducer/Actions';

const store = createStore(Reducer);

//Constants
import { images, theme } from '../../constants';
const { COLORS, FONTS, SIZES } = theme;

const Profile = ({ navigation }) => {
  console.log('-----state 2');
  // console.log(store.getState());



  let selectedProfile = '';
  return (
    <SafeAreaView style= { styles.container }>
      <View style={{
        marginHorizontal: '20%',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
        <Text style={{
          ...FONTS.h1
        }}>Eres:</Text>
      </View>
      <TouchableOpacity style={ styles.ocuppationSelectable }
        onPress={() => selectedProfile = 'STUDENT'}>
        <Image
          source={ images.student }
          style={{
            width: '15%',
            height: 50,
            position: 'absolute',
            marginLeft: 10,
          }}
        />
        <Text style={{
          ...FONTS.h2,
          marginHorizontal: '25%'
        }}>Estudiante</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.ocuppationSelectable}
        onPress={() => selectedProfile = 'PROFESSOR'}>
        <Image
          source={ images.professor }
          style={{
            width: '15%',
            height: 50,
            position: 'absolute',
            marginLeft: 10,
          }}
        />
        <Text style={{
          ...FONTS.h2,
          marginHorizontal: '25%'
        }}>Profesor</Text>
      </TouchableOpacity>
      <View style={{
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TouchableOpacity
          style={ styles.buttonNext }
          onPress={() => {
            console.log(selectedProfile);
            store.dispatch(changeToQuizz(selectedProfile));
            navigation.navigate('Questionnaire');
        }}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            SIGUIENTE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonNext: {
    position: 'absolute',
    top: 120,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.radius,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  ocuppationSelectable: {
    marginHorizontal: 20,
    justifyContent: 'center',
    margin: 10,
    borderColor: COLORS.borderInput,
    borderWidth: 1,
    height: 70,
    borderRadius: SIZES.radius,
  }
});

export default Profile;
