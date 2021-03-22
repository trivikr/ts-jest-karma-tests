import jest from "jest-mock";
import expect from "expect";

// @ts-ignore: Type 'ModuleMockerClass' is missing properties from type 'typeof jest'
window.jest = jest;

// @ts-ignore: Property 'expect' does not exist on type 'Window & typeof globalThis'
window.expect = expect;
