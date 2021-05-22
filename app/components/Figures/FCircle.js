import React from 'react';
import {
  View
} from 'react-native';
import { Circle} from 'react-native-svg';
import { v4 as uuidv4 } from 'uuid';


const FCircle = (props) => {
  console.log(props);
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const width = 300;
  const height = 600;
  const radio = props.r;
  const color = props.color;

  return (
    <Circle
      key={uuidv4()}
      cx = {random(0, width) + radio/2}
      cy = {random(0, height) + radio/2}
      r = {radio}
      fill={color}
    />
  );
}

export default FCircle;
