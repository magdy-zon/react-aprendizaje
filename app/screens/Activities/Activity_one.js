import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg from 'react-native-svg'

//Constants and Theme
import { images, theme } from '../../constants';
const { COLORS, FONTS, SIZES } = theme;

// Components
import FCircle from '../../components/Figures/FCircle';

const ActivityOne = ({navigation}) => {
  const circle1 = new FCircle();
  const circle2 = new FCircle();
  const figures = [
    circle1
  ];
  const [ circles, setCircles ] = useState(figures);

  useEffect(() => {
    circles.push(new FCircle());
  }, [circles]);
  const updateCircles = () => {
    console.log('l');
    circles.push(new FCircle());
    setCircles(circles);
  }

  return (
    <SafeAreaView>
      <ScrollView style={{
        paddingHorizontal: 20,
      }}>
        <View style={styles.container} >
          <Text style={{ ...FONTS.h2, color: '#000' }}>
          Title
          </Text>
          <Text style={{ ...FONTS.body4, color: '#000' }}>
          ¿Qué sucede si tocas el círculo?
          </Text>
        </View>
        <View style={ styles.canvas } >
          <Svg onPress={updateCircles }>
            {circles.map(element => {
              return element;
            })}
          </Svg>
        </View>
        <View style={styles.container} >
          <Text style={{ ...FONTS.body4, color: '#000' }}>
          ¿Qué comportamiento observas?
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: 'column'
  },
  circle: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    flex: 1
  }
});

export default ActivityOne;
