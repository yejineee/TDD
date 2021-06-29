import fetch from "../async";

test("reject test", async () => {
  try {
    await fetch();
  } catch (e) {
    expect(e.message).toMatch("err in fetch");
  }
});
test("reject test", () => {
  return expect(fetch()).rejects.toEqual(new Error("err in fetch"));
});
