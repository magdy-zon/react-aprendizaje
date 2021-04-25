import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { theme } from '../../constants';

const FCircle = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const width = 300;
  const height = 600;

  const randomW = random(0, width);
  const randomH = random(0, height);
  const radio = 10;
  const color = 'green';

  return (
    <Circle
      cx = {randomW}
      cy = {randomH}
      r = {radio}
      fill={color}
    />
  );
}

export default FCircle;
