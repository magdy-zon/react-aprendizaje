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
      title: 'Aprendiendo a mirar el mundo'
    }, {
      title: 'Veamos que sucede con ciertas poblaciones en un ambiente'
    }
  ];

  return (
    <SafeAreaView style= { styles.container }>
      {
        activityDetails.map((item, index) => {
          return <Card title={index+1 + ' ' + item.title} text='My text' />
        })
      }

      <Card title='Title' text='My text' />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  // Styles for enabled card
  activeCard: {
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  card: {
    backgroundColor: COLORS.white,
    margin: 10,
    padding: 10,
    borderRadius: SIZES.radius,
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f8f8f8',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  detailActivity: {
    justifyContent: 'center',
    borderColor: COLORS.blue,
    borderWidth: 1,
    height: 50,
    borderRadius: SIZES.radius,
  },
  headerCard: {
    ...FONTS.body3,
    margin: 10,
    marginBottom: 20
  }
});

export default Home;
