function triangleType(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return "NotATriangle";
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}

module.exports = { triangleType };
