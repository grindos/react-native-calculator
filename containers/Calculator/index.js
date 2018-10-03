import React from 'react';
import { View } from 'react-native';

import InputField from './InputField';
import Buttons from './Buttons';
import styles from './styles';

const Calculator = () => (
  <View style={styles.main}>
    <InputField />
    <Buttons />
  </View>
);

export default Calculator;
