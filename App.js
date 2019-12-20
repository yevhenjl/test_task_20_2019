/* eslint-disable no-case-declarations */
import React, { useState, useReducer } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TextInput,
} from 'react-native';

import Context from './src/context';
import Table from './src/Table';
import reducer from './src/reducer';

const initialState = {
  table: [],
  averages: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [numRows, setNumRows] = useState('');
  const [numColumns, setNumColumns] = useState('');

  const startCreateTable = () => {
    dispatch({ type: 'create', payload: { numRows, numColumns } });
  };

  const addRow = () => {
    setNumRows(`${+numRows + 1}`);
    dispatch({ type: 'addrow', payload: numColumns });
  };

  return (
    <Context.Provider
      value={{
        dispatch,
      }}
    >
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <View style={{ width: '60%' }}>
            <TextInput
              placeholder="Rows number"
              value={numRows}
              keyboardType="numeric"
              onChangeText={val => setNumRows(val)}
              style={styles.input}
            />
            <TextInput
              placeholder="Columns number"
              value={numColumns}
              keyboardType="numeric"
              onChangeText={val => setNumColumns(val)}
              style={styles.input}
            />
            <View style={{ margin: 10 }}>
              <Button
                title="Create table"
                disabled={~~Number(numRows) === 0 || ~~Number(numColumns) === 0}
                onPress={() => startCreateTable()}
              />
            </View>
          </View>
          <View>
            <Button title="Add row" onPress={addRow} />
          </View>
        </View>
        <ScrollView horizontal >
          <Table {...state} />
        </ScrollView>
      </SafeAreaView>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightgreen',
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  body: {
    padding: 10,
  },
  input: {
    marginTop: 10,
    fontSize: 16,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default App;
