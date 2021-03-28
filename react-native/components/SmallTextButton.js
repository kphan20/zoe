import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import MontserratR from '../components/text/MontserratR';
import Colors from '../constants/colors';

const SmallTextButton = (props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      // onPress={props.onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <MontserratR style={pressed ? styles.pressed : styles.unpressed}>
        {props.text}
      </MontserratR>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    color: Colors.c1,
    opacity: 0.8,
  },
  unpressed: {
    color: Colors.c1,
  },
});

export default SmallTextButton;
