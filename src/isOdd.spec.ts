import { isOdd } from "./isOdd";

describe(isOdd.name, () => {
  ([
    [true, 1],
    [false, 2],
  ] as [boolean, number][]).forEach(([expected, number]) => {
    it(`returns ${expected} for ${number}`, () => {
      expect(isOdd(number)).toBe(expected);
    });
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

  [1.01, Number.EPSILON, Number.NaN, Infinity].forEach((notInteger) => {
    it(`throws TypeError for ${notInteger}`, () => {
      expect(() => {
        // @ts-ignore: Argument is not assignable to parameter of type 'number'
        isOdd(notInteger);
      }).toThrowError(`Number should be an integer. Received ${notInteger}.`);
    });
  });

  [
    Number.MAX_SAFE_INTEGER + 1,
    Number.MIN_SAFE_INTEGER - 1,
    Math.pow(2, 53),
  ].forEach((notSafeInteger) => {
    it(`throws RangeError for ${notSafeInteger}`, () => {
      expect(() => {
        // @ts-ignore: Argument is not assignable to parameter of type 'number'
        isOdd(notSafeInteger);
      }).toThrowError(
        `Number should be a safe interger. Received ${notSafeInteger}.`
      );
    });
  });
});
