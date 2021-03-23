const isOdd = (value: number) => {
  if (typeof value !== "number") {
    throw new TypeError(
      `Data of type "number" expected. Received ${typeof value}.`
    );
  }
  if (!Number.isInteger(value)) {
    throw new Error(`Number should be an integer. Received ${value}.`);
  }
  if (!Number.isSafeInteger(value)) {
    throw new RangeError(
      `Number should be a safe interger. Received ${value}.`
    );
  }
  return value % 2 === 1;
};

export { isOdd };
