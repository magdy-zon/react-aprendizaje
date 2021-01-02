import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

const imageSplash = [
  '../assets/testimage.png',
  '../assets/testimage.png',
  '../assets/testimage.png',
  '../assets/testimage.png'
];

const descriptions = [
  'Some descr 1',
  'Some descr 2',
  'Some descr 3',
  'Some descr 4'
];

let positionSplash = 0;

const updateSplashImage = (Imagen) => {
  positionSplash++;
  Imagen.setState({
    imageURL: imageSplash[positionSplash]
  });
}

const Imagen = () => {
  const [image, nextImage] = useState(imageSplash[positionSplash]);

  return (
    <Image
      style = { styles.image }
      source = { require('../assets/testimage.png') }
    >
    </Image>
  );
}

function Splash(props) {
  return(
    <View>
      <View style = { styles.flex }>
        <Imagen />
      </View>
      <View style = { styles.flex }>
        <Text />
        <Text
          style = { styles.nextButton }
          onPress={(Imagen) => {updateSplashImage(); console.log('pressed');}}
        >Next</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center"
  },
  flex: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    alignItems: "center"
  },
  nextButton: {
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Splash;
