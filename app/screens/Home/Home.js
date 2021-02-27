import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native';


//Constants
import { images, theme } from '../../constants';

//Theme
const { COLORS, FONTS, SIZES } = theme;

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style= { styles.container }>
      <View>
        <Text>
        Modulo 1
        </Text>
      </View>
      <View>
        <Text>
        Modulo 2
        </Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
    paddingLeft: '5%',
    paddingRight: '5%'
  }
});

export default Home;
