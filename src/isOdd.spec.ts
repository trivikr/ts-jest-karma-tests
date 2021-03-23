import { isOdd } from "./isOdd";

describe(isOdd.name, () => {
  it("returns true for 1", () => {
    expect(isOdd(1)).toBe(true);
  });

  [null, true, "str", [], {}].forEach((notNumber) => {
    it(`throws TypeError for ${typeof notNumber}`, () => {
      expect(() => {
        // @ts-ignore: Argument is not assignable to parameter of type 'number'
        isOdd(notNumber);
      }).toThrowError(
        `Data of type "number" expected. Received ${typeof notNumber}.`
      );
    });
  });
});
