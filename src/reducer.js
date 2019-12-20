import {
  createTable,
  tableAverage,
  tableIncItem,
  avgIncItem,
  generateNewRow,
  avgAddNewRow,
  tableDelItem,
} from './functions';

export default function reducer(state, action) {
  switch (action.type) {
    case 'create':
      const table = createTable(action.payload);

      return {
        table,
        averages: tableAverage(table),
      };

    case 'increase':
      const tableInc = tableIncItem(state.table, action.payload);

      return {
        table: tableInc,
        averages: avgIncItem(tableInc, state.averages, action.payload),
      };

    case 'addrow':
      const lastId = state.table.slice(-1)[0].slice(-1)[0].id;
      const row = generateNewRow(lastId, action.payload);

      return {
        table: [...state.table, ...[row]],
        averages: avgAddNewRow(row, state.averages, action.payload),
      };

    case 'delrow':
      if (state.table.length === 1) {
        return {
          table: [],
          averages: [],
        };
      }

      const tableDeletedItem = tableDelItem(state.table, action.payload);

      return {
        table: tableDeletedItem,
        averages: tableAverage(tableDeletedItem),
      };

    default:
      return state;
  }
}
