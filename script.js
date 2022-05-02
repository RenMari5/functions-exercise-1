function getAreaOfCircle(radius) {
  const rad = radius;
  return Math.PI * rad * rad;
}

console.log(getAreaOfCircle(1));

function getCircumferenceOfCircle(radius) {
  const rad = radius;
  return 2 * Math.PI * rad;
}

console.log(getCircumferenceOfCircle(9));

function getAreaOfSquare(side) {
  const sides = side;
  return sides * sides;
}

console.log(getAreaOfSquare(25));

function getAreaOfTriangle(base, height) {
  const bases = base;
  const heights = height;
  return (bases * heights) / 2;
}

console.log(getAreaOfTriangle(5, 10));
