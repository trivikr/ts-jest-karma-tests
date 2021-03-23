import jest from "jest-mock";
import expect from "expect";

// Missing jest functions should be added here, if required.
window.jest = jest;
window.expect = expect;

window.describe.each = (inputs) => (testName, test) =>
  inputs.forEach((args) => window.describe(testName, () => test(...args)));
