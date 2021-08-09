import { isEven } from "./isEven";
import { isOdd } from "./isOdd";

jest.mock("./isOdd");

describe(isEven.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  ([
    [false, 1],
    [true, 2],
  ] as [boolean, number][]).forEach(([expected, number]) => {
    it(`returns ${expected} for ${number}`, () => {
      (isOdd as jest.Mock).mockReturnValueOnce(!expected);
      expect(isEven(number)).toBe(expected);
      expect(isOdd).toHaveBeenCalledTimes(1);
      expect(isOdd).toHaveBeenCalledWith(number);
    });
  });
});
