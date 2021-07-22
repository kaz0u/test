import { c, addOne } from "./index";

describe("foo bar", () => {
  test("foo", () => {
    expect(c).toBe("foo foo");
  });

  test("bar", () => {
    expect(addOne(45)).toBe(46);
  });
});
