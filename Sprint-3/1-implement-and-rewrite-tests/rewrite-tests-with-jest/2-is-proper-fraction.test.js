// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");


// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.
const isProperFraction = require("../implement/2-is-proper-fraction");

// Case 1: Proper fractions
test(`should return true for proper fractions`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
});

// Case 2: Improper fractions
test(`should return false for improper fractions`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(-3, 2)).toEqual(false);
  expect(isProperFraction(3, -2)).toEqual(false);
});

// Case 3: Zero numerator
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, -1)).toEqual(true);
});

// Case 4: Zero denominator
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Case 5: Negative fractions
test(`should return false for negative fractions with positive denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

test(`should return false for negative fractions with negative denominator`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

// Case 6: Invalid fractions (denominator is zero)
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(-1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Case 7: Special case: numerator is zero
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(true);
  expect(isProperFraction(0, -1)).toEqual(true);
}); 


// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

