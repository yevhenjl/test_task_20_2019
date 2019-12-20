import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;

const minAmount = 100;
const maxAmount = 999;
const rnd = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const createTable = ({ numColumns, numRows }) => {
  let id = 0;

  const arr = Array.from({ length: numRows }, () => ({
    id: id++,
    amount: rnd(minAmount, maxAmount),
  })).map(() =>
    Array.from({ length: numColumns }, () => ({ id: id++, amount: rnd(minAmount, maxAmount) })),
  );

  return arr;
};

export const tableAverage = table => {
  return table
    .reduce((a, curr) => curr.map((v, i) => v.amount + a[i]), Array(table[0].length).fill(0))
    .map(v => Math.floor(v / table.length));
};

export const tableIncItem = (table, itemId) => {
  return table.map(v => v.map(item => (item.id === itemId ? { amount: item.amount++, ...item } : item)));
};

export const avgIncItem = (table, averages, itemId) => {
  const avgIndex = table.map(v => v.findIndex(val => val.id === itemId)).find(el => el >= 0);
  const newAverage = table.map(v => v[avgIndex]).reduce((a, curr) => a + curr.amount, 0) / table.length;
    
  averages[avgIndex] = Math.floor(newAverage);

  return averages;
};

export const generateNewRow = (lastId, numColumns) => {
  return Array.from({ length: numColumns }, () => ({
    id: ++lastId,
    amount: rnd(minAmount, maxAmount),
  }));
};

export const avgAddNewRow = (row, averages, numColumns) => {
  return row.map((v, i) => Math.floor((v.amount + averages[i]) / numColumns));
};

export const tableDelItem = (table, itemId) => {
  const delIdx = table.findIndex(v => v.some(val => val.id === itemId));
  return [...table.slice(0, delIdx), ...table.slice(delIdx + 1)];
};
