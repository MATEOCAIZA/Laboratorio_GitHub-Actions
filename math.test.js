const { areaCirculo, invertirTexto } = require('./math')


describe('areaCirculo', () => {
  test('Área con radio 3 ≈ 28.274333', () => {
    expect(areaCirculo(3)).toBeCloseTo(28.274333, 6);
  });

  test('Área con radio 0 = 0', () => {
    expect(areaCirculo(0)).toBe(0);
  });

});

describe('invertirTexto', () => {
  test('Invierte "hola" → "aloh"', () => {
    expect(invertirTexto('hola')).toBe('aloh');
  });

});


