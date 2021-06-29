import Dollar from "../dollar";

describe("곱하기 테스트", () => {
  test("times 메소드는 기존의 값에 인자로 주어진 값을 곱한 값을 반환한다.", () => {
    const expected = 10;
    const dollar = new Dollar(5);
    const product = dollar.times(2);

    expect(product.amount).toBe(expected);
  });
  test("times 메소드는 기존의 값을 변경시키지 않는다.", () => {
    const dollar = new Dollar(5);
    const firstProduct = dollar.times(2);
    const secondProduct = dollar.times(10);
    const firstExpected = 10;
    const secondExpected = 50;

    expect(firstProduct.amount).toBe(firstExpected);
    expect(secondProduct.amount).toBe(secondExpected);
  });
});

describe("Equality Test", () => {
  test("생성자에 같은 값이 들어간 두 달러 객체는 equals 메소드의 반환값이 true이다.", () => {
    const first = new Dollar(10);
    const second = new Dollar(10);

    expect(first.equals(second)).toBeTruthy();
  });
});
