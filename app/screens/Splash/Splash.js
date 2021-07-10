import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStore } from 'redux';
import Reducer from '../../../app/reducer/Reducers';
import { changeToProfile } from '../../../app/reducer/Actions'
const store = createStore(Reducer);

//Constants
import { images, theme } from '../../constants';
const { splash1, splash2, splash3 } = images;

//Theme
const { COLORS, FONTS, SIZES } = theme;

const descriptionSplash = [
  {
    title: "Metodología de enseñanza 1",
    description: "Some amazing text describing the app",
    img: splash1
  }, {
    title: "Metodología de enseñanza 2",
    description: "Some amazing text describing the app",
    img: splash2
  }, {
    title: "Metodología de enseñanza 3",
    description: "Some amazing text describing the app",
    img: splash3
  }
];

const Splash = ({ navigation }) => {
  console.log('-----state 1');
  // console.log(store.getState());

  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    // Checks if user finished scrolling the onBoarding pages
    scrollX.addListener(({ value }) => {
      if(Math.floor(value / SIZES.width) === descriptionSplash.length - 1) {
        setCompleted(true);
      } else {
        setCompleted(false);
      }
    })

  }, []);

  //Render
  function renderContent() {
    return (
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          delecerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={ Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX }}},
          ], { useNativeDriver: false })}
        >
        {descriptionSplash.map((item, index) => (
            <View
              key={ index }
              style={{ width: SIZES.width }}
            >
              <View
                style={{
                  flex: 1,
                  // alignItems: 'center',
                  // justifyContent: 'center'
                }}
                >
                <Image
                  source={item.img}
                  resizeMode= 'cover'
                  style= {{
                    width: SIZES.width,
                    height: SIZES.height
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: '35%',
                  left: 40,
                  right: 40
                }}
              >
                <Text style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    textAlign: 'center'
                  }}>{item.title}</Text>
                <Text style={ styles.textDescription }>
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                style={ styles.buttonSplash }
                onPress={() => {
                  store.dispatch(changeToProfile());
                  navigation.navigate('Profile');
                }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white}}>
                  { completed ? "Iniciar" : "Avanzar"}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
      </Animated.ScrollView>
    );
  };

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style= { styles.dotContainer }
      >
        {descriptionSplash.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp'
          })
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[ styles.dot, { width: dotSize, height: dotSize } ]}
            >
          </Animated.View>
          );
        })}
      </View>
    );
  }


  return (
    <SafeAreaView style= { styles.container }>
      <View>
        {renderContent()}
      </View>
      <View style={ styles.dotRootContainer}>
        {renderDots()}
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  buttonSplash: {
    position: 'absolute',
    bottom: '10%',
    right: 0,
    width: 150,
    height: 60,
    paddingLeft: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: COLORS.blue
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '25%' : '10%'
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center'
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2
  },
  textDescription: {
    ...FONTS.body2,
    color: COLORS.gray,
    textAlign: 'center',
  }
});

export default Splash;
