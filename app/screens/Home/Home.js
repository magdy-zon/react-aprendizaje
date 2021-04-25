import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


//Constants and Theme
import { images, theme } from '../../constants';
const { COLORS, FONTS, SIZES } = theme;

// Components
import Card from '../../components/Card';

const Home = ({ navigation }) => {
  const activityDetails = [
    {
      title: 'Aprendiendo a observar el mundo'
    }, {
      title: 'Veamos que sucede con ciertas poblaciones en un ambiente'
    }
  ];

  return (
    <SafeAreaView style= { styles.container }>
      {
        activityDetails.map((item, index) => {
          return <Card title={index+1 + '. ' + item.title} />
        })
      }
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f8f8f8',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
});

export default Home;
