import { makeHttpResponsesDictionary } from "../src/helpers";

describe("makeHttpResponsesDictionary tests", () => {
  it("should create a dictionary with 54 objects", () => {
    const dictionary = makeHttpResponsesDictionary();

    expect(Object.entries(dictionary)).toHaveLength(55);
  });
});
