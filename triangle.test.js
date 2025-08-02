const { triangleType } = require('./triangle');

test('Equilateral triangle', () => {
  expect(triangleType(5, 5, 5)).toBe("Equilateral");
});

test('Isosceles triangle', () => {
  expect(triangleType(5, 5, 3)).toBe("Isosceles");
});

test('Scalene triangle', () => {
  expect(triangleType(4, 5, 6)).toBe("Scalene");
});

test('Not a triangle', () => {
  expect(triangleType(1, 2, 3)).toBe("NotATriangle");
});

test('Invalid input: 0, 5, 5', () => {
  expect(triangleType(0, 5, 5)).toBe("InvalidInput");
});

test('Invalid input: 201, 5, 5', () => {
  expect(triangleType(201, 5, 5)).toBe("InvalidInput");
});

test('Invalid input: "a", 5, 5', () => {
  expect(triangleType("a", 5, 5)).toBe("InvalidInput");
});

