function triangleType(a, b, c) {
  // ตรวจสอบว่าเป็นตัวเลขจำนวนเต็มระหว่าง 1 ถึง 200
  if (![a, b, c].every(side => Number.isInteger(side) && side >= 1 && side <= 200)) {
    return "InvalidInput";
  }

  // ตรวจสอบว่าเป็นสามเหลี่ยมหรือไม่
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "NotATriangle";
  }

  // ตรวจสอบประเภทสามเหลี่ยม
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}

module.exports = { triangleType };
