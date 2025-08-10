const sum = require('./sum');

test('suma 2 + 2 debe dar 4', () => {
  expect(sum(2, 2)).toBe(4);
});
