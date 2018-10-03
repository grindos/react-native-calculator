import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';

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
OperatorButton.propTypes = {
  operator: PropTypes.string,
  onOperatorClick: PropTypes.func,
};

const mapDispatchToProps = {
  onOperatorClick: operatorClick,
};

export default connect(null, mapDispatchToProps)(OperatorButton);
