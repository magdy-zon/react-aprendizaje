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
  return (
    <SafeAreaView style= { styles.container }>
      <View style={ styles.card } >
        <View>
          <Text style= { styles.headerCard }>
            1. Aprendiendo a mirar el mundo
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={ styles.detailActivity }
            disabled={true}
          >
            <Text style={{
              ...FONTS.body4,
              marginHorizontal: '15%'
            }}>Detalle</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ styles.card } >
        <Text style= { styles.headerCard } >
          2. Veamos que sucede con ciertas poblaciones en un ambiente
        </Text>
        <TouchableOpacity style={ styles.detailActivity }>
          <Text style={{
            ...FONTS.body4,
            marginHorizontal: '15%'
          }}>Detalle</Text>
        </TouchableOpacity>
      </View>
      <Card>

      </Card>
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
