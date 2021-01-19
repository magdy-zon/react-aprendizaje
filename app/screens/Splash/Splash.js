import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Animated,
  Image
} from 'react-native';

//Constants
import { images, theme } from '../../constants';
const { splash1, splash2, splash3 } = images;

//Theme
const { COLORS, FONTS, SIZES } = theme;

const descriptionSplash = [
  {
    title: "Metodología de enseñanza 1",
    description: "",
    img: splash1
  }, {
    title: "Metodología de enseñanza 2",
    description: "",
    img: splash2
  }
];

const Splash = () => {

  const scrollX = new Animated.Value(0);
  //Render
  function renderContent() {
    return (
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          delecerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment='center'
          showsHorizontalScroll={false}
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
                  alignItems: 'center',
                  justifyContent: 'center'
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
                  bottom: '10%',
                  left: 40,
                  right: 40
                }}
              >
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.white,
                    textAlign: 'center'
                  }}>{item.title}</Text>
                <Text style={{
                    ...FONTS.body1,
                    color: COLORS.gray,
                    textAlign: 'center'
                  }}>{item.description}</Text>
              </View>
            </View>
          ))}
      </Animated.ScrollView>
    );
  };

  function renderDots() {
    return (
      <View
        style= { styles.dotContainer }
      >
        {descriptionSplash.map((item, index) => {
          return (
            <View
              key={`dot-${index}`}
              style={[ styles.dot, { width: 20, height: 20 } ]}
            >

            </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '20%'
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,

  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2
  }
});

export default Splash;
