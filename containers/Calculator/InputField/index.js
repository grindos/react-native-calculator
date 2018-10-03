import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentNumber, selectSavedNumber, selectOperator } from '../selectors';
import styles from '../styles';

const InputField = ({ currentNumber, savedNumber, operator }) => (
  <View style={styles.inputField}>
    <Text style={styles.saved}>
      {savedNumber}
      {' '}
      {operator}
    </Text>
    <Text style={styles.input}>
      {currentNumber}
    </Text>
  </View>
);
InputField.propTypes = {
  currentNumber: PropTypes.string,
  savedNumber: PropTypes.string,
  operator: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  currentNumber: selectCurrentNumber,
  savedNumber: selectSavedNumber,
  operator: selectOperator,
});

export default connect(mapStateToProps)(InputField);
