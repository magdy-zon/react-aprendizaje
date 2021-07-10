import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Constants and Theme
import { images, theme } from '../constants';
const { CARD, COLORS, FONTS, SIZES } = theme;

// Import vector icons
import Icon from 'react-native-vector-icons/AntDesign';

const Card = (props) => {
  const navigation = useNavigation();

  return (
    <View style={ styles.card } >
      <View>
        <Text style= { styles.headerCard }>
          {props.title}
        </Text>
      </View>
      <View style= { styles.cardContainer }>
        <Icon.Button
          size={20}
          name="file1"
          color= { CARD.buttonDisabled }
          style= { styles.cardIcon }
          onPress={() => navigation.navigate(props.view)}>
        </Icon.Button>
        <Icon.Button
          size={20}
          name="bulb1"
          color= { CARD.buttonDisabled }
          style= { styles.cardIcon }
          onPress={() => alert('Login with Facebook')}>
        </Icon.Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles for enabled card
  card: {
    backgroundColor: COLORS.successActivity,
    marginTop: 30,
    marginHorizontal: '5%',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
    borderRadius: CARD.borderRadius,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardIcon: {
    alignSelf: 'center',
    backgroundColor: COLORS.successActivity,
    paddingLeft: 20,
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
