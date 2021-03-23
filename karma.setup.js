import jest from "jest-mock";
import expect from "expect";

// Missing jest functions should be added here, if required.
window.jest = jest;
window.expect = expect;

window.it.each = (table) => (name, fn) =>
  table.forEach((args) => window.it(name, () => fn(...args)));
