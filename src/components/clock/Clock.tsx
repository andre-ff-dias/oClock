import React from 'react';
import Svg from 'react-native-svg';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;
const hourStickCount = 12;
const minuteStickCount = 12 * 6;

const Clock = () => {
  return <Svg height={width} width={width}></Svg>;
};

export default Clock;
