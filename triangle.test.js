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
