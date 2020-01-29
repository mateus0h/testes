function soma(a, b) {
  return a + b;
}

test('Soma de dois valores', () => {
  const result = soma(1, 2);
  expect(result).toBe(3);
});
