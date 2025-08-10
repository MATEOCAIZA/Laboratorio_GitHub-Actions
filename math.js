export function areaCirculo(radio) {
    if (typeof radio !== 'number' || Number.isNaN(radio)) {
      throw new Error('El radio debe ser un número');
    }
    if (radio < 0) {
      throw new Error('El radio no puede ser negativo');
    }
    return Math.PI * radio * radio;
  }
  

  export function invertirTexto(texto) {
    if (typeof texto !== 'string') {
      throw new Error('El parámetro debe ser un string');
    }
    return texto.split('').reverse().join('');
  }
  