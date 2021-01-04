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

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
  expect(shoppingList.length).toEqual(5)
});