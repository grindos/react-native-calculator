import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { operatorClick } from '../../actions';
import styles from '../../styles';

const OperatorButton = ({ operator, onOperatorClick }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => {
      onOperatorClick(operator);
    }}
  >
    <Text>
      {operator}
    </Text>
  </TouchableOpacity>
);

const mapDispatchToProps = {
  onOperatorClick: operatorClick,
};

export default connect(null, mapDispatchToProps)(OperatorButton);
