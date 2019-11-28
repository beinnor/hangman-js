import { getRandomInt, getNewWord } from './helpers';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

test('returns a random integer less than 10', () => {
  expect(getRandomInt(10)).toBe(5);
});

test('returns an array of lvl + 2', () => {
  expect(getNewWord(2)).toHaveLength(4);
});
