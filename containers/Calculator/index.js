import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import InputField from './InputField';
import Buttons from './Buttons';
import styles from './styles';

class Calculator extends Component {
  render() {
    return (
      <View style={styles.main}>
        <InputField />
        <Buttons />
      </View>
    );
  }
}

export default Calculator;
