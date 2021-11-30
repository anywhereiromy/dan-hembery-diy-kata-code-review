const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns Yes if a boolean is true and No if a boolean is false', () => {
  expect(booleanToWord(true)).toEqual('Yes')
  expect(booleanToWord(false)).toEqual('No')
  expect(booleanToWord('maybe')).toEqual('Not a boolean!')
});
});
