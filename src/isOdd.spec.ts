import { isOdd } from "./isOdd";

describe(isOdd.name, () => {
  it("returns true for 1", () => {
    expect(isOdd(1)).toBe(true);
  });
});
