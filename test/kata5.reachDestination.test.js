const { reachDestination, humanCatDogYears } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.")
    expect(reachDestination(78, 15)).toEqual("I should be there in 5.5 hours.")
    expect(reachDestination(149, 22)).toEqual("I should be there in 7 hours.")
  });
});
