import React from 'react';
import { View } from 'react-native';

import TableRow from './TableRow';
import TextCell from './TextCell';

const Table = ({ table, averages }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      {table.length > 0 && table.map(row => <TableRow key={row[0].id} row={row} />)}
      <View style={{ flexDirection: 'row' }}>
        {averages.length > 0
          && averages.map((item, i) => (
            <TextCell key={i} amount={item} style={{ backgroundColor: 'lightgrey' }} />
          ))}
      </View>
    </View>
  );
};

export default Table;
