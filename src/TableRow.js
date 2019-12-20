import React, { useContext } from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import Cell from './Cell';
import TextCell from './TextCell';
import Context from './context';
import { width } from './functions';

export default function TableRow({ row }) {
  const { dispatch } = useContext(Context);

  const value = new Animated.Value(0);

  const valX = value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -width],
  });

  const deleteRow = id => {
    Animated.timing(value, {
      toValue: 1,
      duration: 300,
    }).start(() => dispatch({ type: 'delrow', payload: id }));
  };

  const sum = () => row.reduce((a, curr) => a + curr.amount, 0);

  return (
    <Animated.View
      style={[
        { flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1 },
        { transform: [{ translateX: valX }] },
      ]}
    >
      {row.map(item => {
        return <Cell key={item.id} amount={item.amount} id={item.id} />;
      })}
      <TextCell amount={sum()} style={{ backgroundColor: 'lightgrey', borderLeftColor: 'grey', borderLeftWidth: 1 }} />
      <TouchableOpacity onPress={() => deleteRow(row[0].id)}>
        <TextCell amount="Del" style={{ backgroundColor: 'coral', borderLeftColor: 'white', borderLeftWidth: 2 }} />
      </TouchableOpacity>
    </Animated.View>
  );
}
