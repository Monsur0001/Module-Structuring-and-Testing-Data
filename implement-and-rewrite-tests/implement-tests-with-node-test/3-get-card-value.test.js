import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});

test("Valid face card", () => {
  assert.equal(getCardValue("J♣"), 10);
});

test("Valid ace card", () => {
  assert.equal(getCardValue("A♦"), 11);
});

test("Valid ten card", () => {
  assert.equal(getCardValue("10♥"), 10);
});

test("Invalid card with missing suit", () => {
  assert.throws(() => getCardValue("5"), "Expected clear error");
});

test("Invalid card with missing rank", () => {
  assert.throws(() => getCardValue("♠"), "Expected clear error");
});

test("Invalid card with extra characters", () => {
  assert.throws(() => getCardValue("10♠extra"), "Expected clear error");
});

test("Invalid card with invalid rank", () => {
  assert.throws(() => getCardValue("11♠"), "Expected clear error");
});

test("Invalid card with invalid suit", () => {
  assert.throws(() => getCardValue("10X"), "Expected clear error");
});   

// TODO: What other invalid card cases can you think of?

test("Invalid card with missing suit", () => {
  assert.throws(() => getCardValue("5"), "Expected clear error");
});

test("Invalid card with missing rank", () => {
  assert.throws(() => getCardValue("♠"), "Expected clear error");
});

test("Invalid card with extra characters", () => {
  assert.throws(() => getCardValue("10♠extra"), "Expected clear error");
});

test("Invalid card with invalid rank", () => {
  assert.throws(() => getCardValue("11♠"), "Expected clear error");
});

test("Invalid card with invalid suit", () => {
  assert.throws(() => getCardValue("10X"), "Expected clear error");
});   

