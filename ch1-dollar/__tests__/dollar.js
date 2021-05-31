import Dollar from "../dollar";

test("multipy test", () => {
  const expected = 10;
  const dollar = new Dollar(5);
  dollar.times(2);
  expect(dollar.amount).toBe(expected);
});
