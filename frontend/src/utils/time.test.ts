import * as Time from './time';

describe('calNowTime Test', () => {
  test('endHour > startHour, endMin >= startMin', () => {
    const startHour = [10, 20];
    const endHour = [11, 20];
    expect(Time.calNowTime(startHour, endHour)).toStrictEqual([1, 0]);
  });
  test('endHour > startHour, endMin < startMin', () => {
    const startHour = [10, 21];
    const endHour = [11, 20];
    expect(Time.calNowTime(startHour, endHour)).toStrictEqual([0, 59]);
  });
  test('endHour === startHour, endMin < startMin', () => {
    const startHour = [11, 21];
    const endHour = [11, 20];
    expect(Time.calNowTime(startHour, endHour)).toStrictEqual([99, 99]);
  });
  test('endHour === startHour, endMin > startMin', () => {
    const startHour = [11, 21];
    const endHour = [11, 40];
    expect(Time.calNowTime(startHour, endHour)).toStrictEqual([0, 19]);
  });
  test('endHour < startHour, endMin > startMin', () => {
    const startHour = [23, 21];
    const endHour = [0, 40];
    expect(Time.calNowTime(startHour, endHour)).toStrictEqual([1, 19]);
  });
  test('endHour < startHour, endMin < startMin', () => {
    const startHour = [23, 41];
    const endHour = [0, 40];
    expect(Time.calNowTime(startHour, endHour)).toStrictEqual([0, 59]);
  });
});
