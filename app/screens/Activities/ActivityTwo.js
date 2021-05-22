import React, { Component, useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Circle, Svg } from 'react-native-svg';


//Constants and Theme
import { theme } from '../../constants';
const { COLORS, FONTS, SIZES } = theme;

// Components
import FCircle from '../../components/Figures/FCircle';
const width = SIZES.width - 40;
const height = SIZES.height - 40;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const r = 12;

export class ActivityOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      circles: [
        <FCircle color='green' r={10} />
      ]
    }
  };

  addCircles = () => {
    const circle = <FCircle color='blue' r={9} />;

    this.setState({
      circles: [...this.state.circles, circle]
    });
  };

  render() {
    let circlesToRender = this.state.circles.map((item) => item);

    return (
      <SafeAreaView>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <View style={styles.container} >
            <Text style={{ ...FONTS.h2, color: '#000', paddingBottom: 20 }}>
              Observación
            </Text>
            <Text style={{ ...FONTS.body3, color: '#000' }}>
              ¿Qué sucede si tocas el área blanca?
            </Text>
          </View>
          <View style={styles.canvas}>
            <Svg onPress={() => this.addCircles()}>
              {circlesToRender}
            </Svg>
          </View>
          <View style={styles.container} >
            <Text style={{ ...FONTS.body3, color: '#000' }}>
              ¿Qué comportamiento observas?
            </Text>
          </View>
          <View>
            <TextInput
              name='answertwo'
              style= { styles.borderInput }
            />
          </View>
          <View>
            <TouchableOpacity
              type= 'submit'
              style={ styles.buttonSubmitQuestion }
            >
              <Text style={{ ...FONTS.h2, color: COLORS.white }}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  borderInput: {
    borderColor: COLORS.borderInput,
    borderRadius: SIZES.radius,
    borderWidth: 1.5,
    height: 120,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: COLORS.white
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
  container: {
    padding: 10
  },
  canvas: {
    borderRadius: SIZES.radius,
    backgroundColor: '#fff',
    width: SIZES.width - 40,
    height: SIZES.height - 40,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10
  },
  circle: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    flex: 1
  }
});

export default ActivityOne;
