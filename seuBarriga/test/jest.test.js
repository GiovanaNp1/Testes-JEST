const sum = require('../src/index');

test("Devo iniciar os tetes com JEST com as principais assertivas", () => {
    let number =  null;
    expect(number).toBeNull();
    number = 12;
    expect(number).not.toBeNull();
    expect(number).toBe(12);
    expect(number).toEqual(12);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(13)
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = {name: 'John', email: 'john123@gmail.com'}
  expect(obj).toHaveProperty('name', 'John');
  expect(obj.name).toBe('John')
  const obj2 = {name: 'John', email: 'john123@gmail.com'}
  expect(obj2).toEqual(obj)
  // expect(obj2).toBe(obj)
})