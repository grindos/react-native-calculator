import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';

import { symbolClick } from '../../actions';
import styles from '../../styles';

const SymbolButton = ({ symbol, onSymbolClick }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => {
      onSymbolClick(symbol);
    }}
  >
    <Text>
      {symbol}
    </Text>
  </TouchableOpacity>
);
SymbolButton.propTypes = {
  symbol: PropTypes.string,
  onSymbolClick: PropTypes.func,
};

const mapDispatchToProps = {
  onSymbolClick: symbolClick,
};

export default connect(null, mapDispatchToProps)(SymbolButton);
