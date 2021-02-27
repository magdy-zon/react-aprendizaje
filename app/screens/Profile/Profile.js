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

//Constants
import { images, theme } from '../../constants';

//Theme
const { COLORS, FONTS, SIZES } = theme;

const Profile = ({ navigation }) => {
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
      <TouchableOpacity style={ styles.ocuppationSelectable }>
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
      <TouchableOpacity style={ styles.ocuppationSelectable}>
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
          onPress={() => navigation.navigate('Questionnaire') }
        >
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
    width: 150,
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
    borderColor: COLORS.blue,
    borderWidth: 1,
    height: 70,
    borderRadius: SIZES.radius,
  }
});

export default Profile;
