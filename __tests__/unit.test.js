// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('Valid phone numbers', () =>{
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone numbers', () =>{
  expect(isPhoneNumber('(415) 271-3861')).toBe(true);
});

test('Invalid phone numbers', () =>{
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid phone numbers', () =>{
  expect(isPhoneNumber('Anjksdkj')).toBe(false);
});

// isEmail
test('valid emails', () =>{
  expect(isEmail('example@gmail.com')).toBe(true);
});

test('valid emails', () =>{
  expect(isEmail('idk123@madeUp.com')).toBe(true);
});

test('Invalid emails', () =>{
  expect(isEmail('idk123@madeUp.notreal')).toBe(false);
});

test('Invalid emails', () =>{
  expect(isEmail('hey@madeUp')).toBe(false);
});

// isStrongPassword
test('Valid Strong Passwords', () =>{
  expect(isStrongPassword('Password')).toBe(true);
});

test('Valid Strong Passwords', () =>{
  expect(isStrongPassword('sfdhj_dflks123')).toBe(true);
});

test('invalid Strong Passwords', () =>{
  expect(isStrongPassword('aaaaaaabbbbb1111')).toBe(false);
});

test('invalid Strong Passwords', () =>{
  expect(isStrongPassword('1234')).toBe(false);
});

// isDate
test('Valid dates', () =>{
  expect(isDate("11/21/2022")).toBe(true);
});


test('Valid dates', () =>{
  expect(isDate("01/26/2004")).toBe(true);
});

test('invalid dates', () =>{
  expect(isDate("001/21/2022")).toBe(false);
});

test('invalid dates', () =>{
  expect(isDate("01/21/022")).toBe(false);
});

// isHexColor
test('Valid Hex colors', () =>{
  expect(isHexColor("#123")).toBe(true);
});

test('Valid Hex colors', () =>{
  expect(isHexColor("#123456")).toBe(true);
});

test('invalid Hex colors', () =>{
  expect(isHexColor("#123456789")).toBe(false);
});

test('invalid Hex colors', () =>{
  expect(isHexColor("#lmao")).toBe(false);
});

