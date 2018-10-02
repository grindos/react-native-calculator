import React from 'react';
import { connect } from 'react-redux';
import { Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { symbolClick } from '../../actions';
import styles from '../../styles';

const SymbolButton = ({ symbol, onSymbolClick }) => (
  <TouchableOpacity style={styles.button} onPress={() => {
    onSymbolClick(symbol)
  }}>
    <Text>
      {symbol}
    </Text>
  </TouchableOpacity>
);

const mapDispatchToProps = {
  onSymbolClick: symbolClick,
};

export default connect(null, mapDispatchToProps)(SymbolButton);
