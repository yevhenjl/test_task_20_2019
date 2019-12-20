import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TextCell({ amount, style }) {
  return (
    <View style={[styles.baseCell, style]}>
      <Text>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseCell: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
