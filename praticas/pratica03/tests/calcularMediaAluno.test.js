const { calcularMediaAluno } = require('../src/calcularMediaAluno');

describe('Função calcularMediaAluno', () => {
  test('deve estar definida', () => {
    expect(calcularMediaAluno).toBeDefined();
  });

  
  test('deve lançar exceção se a1 ou a2 não forem informados', () => {
    expect(() => calcularMediaAluno(undefined, 5)).toThrow('Notas a1 ou a2 não informadas');
    expect(() => calcularMediaAluno(5, undefined)).toThrow('Notas a1 ou a2 não informadas');
  });

  
  test('deve lançar exceção se a1 ou a2 forem negativos', () => {
    expect(() => calcularMediaAluno(-1, 5)).toThrow('Notas a1 ou a2 não podem ser negativas');
    expect(() => calcularMediaAluno(5, -2)).toThrow('Notas a1 ou a2 não podem ser negativas');
  });

  
  test('deve calcular média base quando a3 não é informada', () => {
    const resultado = calcularMediaAluno(5, 7);
    expect(resultado).toBeCloseTo(5 * 0.4 + 7 * 0.6);
  });

  
  test('deve lançar exceção se a3 for negativa', () => {
    expect(() => calcularMediaAluno(5, 7, -1)).toThrow('Nota a3 não pode ser negativa');
  });

  
  test('deve considerar melhor combinação a1 e a3', () => {
    const resultado = calcularMediaAluno(9, 2, 10); 
    
    expect(resultado).toBeCloseTo(9.6);
  });

  
  test('deve considerar melhor combinação a2 e a3', () => {
    const resultado = calcularMediaAluno(2, 9, 10); 
    
    expect(resultado).toBeCloseTo(9.6);
  });
});
