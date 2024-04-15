import { calculate } from "./App";

test('Teste de adição', () => {
    const result = calculate("5+5")
    expect(result).toBe("10")
})

test('Teste de subtração', () => {
    const result = calculate("10-3")
    expect(result).toBe("7")
})

test('Teste de multiplicação', () => {
    const result = calculate("4*6")
    expect(result).toBe("24")
})

test('Teste de divisão', () => {
    const result = calculate("20/5")
    expect(result).toBe("4")
})

test('Teste de divisão por zero', () => {
    const result = calculate("10/0")
    expect(result).toBe("Não Possível Calcular")
})

test('Teste de string vazia', () => {
  const result = calculate("")
  expect(result).toBe("Não Possível Calcular")
})