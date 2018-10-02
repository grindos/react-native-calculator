import React from 'react';
import { connect } from 'react-redux';

import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { back, clear, equals } from '../actions';
import SymbolButton from './SymbolButton';
import OperatorButton from './OperatorButton';
import styles from '../styles';

const Buttons = ({ onClearClick, onEqualsClick, onBackClick }) => (
  <View style={styles.buttons}>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={onClearClick}>
        <Text>
          {'Clear'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onBackClick}>
        <Text>
          {'Back'}
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <SymbolButton symbol="1"/>
      <SymbolButton symbol="2"/>
      <SymbolButton symbol="3"/>
      <OperatorButton operator="+"/>
    </View>
    <View style={styles.row}>
      <SymbolButton symbol="4"/>
      <SymbolButton symbol="5"/>
      <SymbolButton symbol="6"/>
      <OperatorButton operator="-"/>
    </View>
    <View style={styles.row}>
      <SymbolButton symbol="7"/>
      <SymbolButton symbol="8"/>
      <SymbolButton symbol="9"/>
      <OperatorButton operator="x"/>
    </View>
    <View style={styles.row}>
      <SymbolButton symbol="0"/>
      <SymbolButton symbol="."/>
      <TouchableOpacity style={styles.button} onPress={onEqualsClick}>
        <Text>
          {'='}
        </Text>
      </TouchableOpacity>
      <OperatorButton operator="/"/>
    </View>
  </View>
);

const mapDispatchToProps = {
  onClearClick: clear,
  onEqualsClick: equals,
  onBackClick: back,
};

export default connect(null, mapDispatchToProps)(Buttons);
