

const airconditioner = require('./AirConditional.js');
describe('myACTest', () => {
  let ac;

  beforeEach(() => {
    ac = new airconditioner();
  });

  test('initialize ac with isOn set to false and temperature set to 16', () => {
    expect(ac.isOn).toBe(false);
    expect(ac.temperature).toBe(16);
  });

  test('should turn on the AC', () => {
    ac.turnOn();
    expect(ac.isOn).toBe(true);
  });

  test('should turn off the AC', () => {
    ac.turnOn();
    ac.turnOff();
    expect(ac.isOn).toBe(false);
  });

  test('should increase temperature when AC is on and temperature is below 30', () => {
    ac.turnOn();
    ac.increaseTemperature();
    expect(ac.temperature).toBe(17);
  });

  test('should not increase temperature when AC is off', () => {
    ac.increaseTemperature();
    expect(ac.temperature).toBe(16);
  });

  test('should not increase temperature when temperature is already at 30', () => {
    ac.turnOn();
    ac.temperature = 30;
    ac.increaseTemperature();
    expect(ac.temperature).toBe(30);
  });

  test('should decrease temperature when AC is on and temperature is above 16', () => {
    ac.turnOn();
    ac.temperature = 25;
    ac.decreaseTemperature();
    expect(ac.temperature).toBe(24);
  });

  test('should not decrease temperature when AC is off', () => {
    ac.decreaseTemperature();
    expect(ac.temperature).toBe(16);
  });

  test('should not decrease temperature when temperature is already at 16', () => {
    ac.turnOn();
    ac.temperature = 16;
    ac.decreaseTemperature();
    expect(ac.temperature).toBe(16);
  });
});