import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Context from './context';

export default function Cell({ amount, id }) {
  const { dispatch } = useContext(Context);

  return (
    <TouchableOpacity onPress={() => dispatch({ type: 'increase', payload: id })}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
}
