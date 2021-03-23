import { isOdd } from "./isOdd";

// test describe
describe(isOdd.name, () => {
  // test it
  it("returns true for 1", () => {
    expect(isOdd(1)).toBe(true);
  });

  // test describe.each
  describe.each([
    [1, true],
    [2, false],
  ])(`testing %i`, (value, expected) => {
    it(`return equals to ${expected}`, () => {
      expect(isOdd(value)).toBe(expected);
    });

    it(`return does not equals to ${!expected}`, () => {
      expect(isOdd(value)).not.toBe(!expected);
    });
  });
});
