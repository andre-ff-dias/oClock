import React, {useState} from 'react';
import Svg from 'react-native-svg';
import {Dimensions} from 'react-native';
import ClockMarkings from './ClockMarkings';
import ClockHand from './ClockHand';
import {getTime} from '../../helpers/time';
import {useInterval} from '../../helpers/hooks';

const {width} = Dimensions.get('window');
const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;
const hourStickCount = 12;
const minuteStickCount = 12 * 6;

const Clock = () => {
  const [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <Svg height={width} width={width}>
      <ClockMarkings
        minutes={minuteStickCount}
        hours={hourStickCount}
        radius={radius}
        center={center}
      />
      <ClockHand
        angle={time.seconds}
        center={center}
        radius={radius}
        stroke="red"
        strokeWidth="1"
      />
      <ClockHand
        angle={time.minutes}
        center={center}
        radius={radius}
        stroke="white"
        strokeWidth="5"
      />
      <ClockHand
        angle={time.hours}
        center={center}
        radius={radius}
        stroke="white"
        strokeWidth="7"
      />
    </Svg>
  );
};

export default Clock;
