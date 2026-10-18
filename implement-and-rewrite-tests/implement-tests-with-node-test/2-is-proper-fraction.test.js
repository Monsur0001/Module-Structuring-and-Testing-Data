import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Numerator is zero", () => {
  // Example: 0/5 is a proper fraction
  assert.equal(isProperFraction(0, 5), true);
});

test("Numerator is equal to denominator", () => {
  // Example: 3/3 is not a proper fraction
  assert.equal(isProperFraction(3, 3), false);
});

test("Numerator is greater than denominator", () => {
  // Example: 5/3 is not a proper fraction
  assert.equal(isProperFraction(5, 3), false);
});

test("Negative numerator and positive denominator", () => {
  // Example: -1/2 is a proper fraction
  assert.equal(isProperFraction(-1, 2), true);
});

test("Positive numerator and negative denominator", () => {
  // Example: 1/-2 is a proper fraction
  assert.equal(isProperFraction(1, -2), true);
});

test("Negative numerator and negative denominator", () => {
  // Example: -1/-2 is a proper fraction
  assert.equal(isProperFraction(-1, -2), true);
});   