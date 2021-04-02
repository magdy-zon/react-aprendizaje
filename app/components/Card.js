import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

//Constants and Theme
import { images, theme } from '../constants';
const { COLORS, FONTS, SIZES } = theme;


const Card = (props) => {
  return (
    <View style={ styles.card } >
      <View>
        <Text style= { styles.headerCard }>
          {props.title}
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
          }}>{props.text}</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    margin: 10,
    padding: 10,
    borderRadius: SIZES.radius,
    shadowOpacity: 0.1,
    shadowRadius: 4,
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

export default Card;
