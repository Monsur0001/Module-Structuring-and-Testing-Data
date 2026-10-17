import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function() {
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});


test("correctly convert midnight", function() {
    assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("correctly convert noon", function() {
    assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("correctly convert single digit hour in the morning", function() {
    assert.equal(formatAs12HourClock("01:30"), "01:30 am");
});

test("correctly convert single digit hour in the afternoon", function() {
    assert.equal(formatAs12HourClock("13:45"), "01:45 pm");
});

test("correctly convert time with leading zeros", function() {
    assert.equal(formatAs12HourClock("09:05"), "09:05 am");
});

test("correctly convert time with no leading zeros", function() {
    assert.equal(formatAs12HourClock("9:5"), "09:05 am");
});