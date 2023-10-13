import CodersArray from "./CodersArray";

describe("Given a filter method ", () => {
  describe("When you receive an instance of CodersArray with  { elements: [3, 8, 10, 2] and use a filter method with a callback function (number) => number * 5)", () => {
    test("You should receive an array [3, 2]", () => {
      const earlyProduct = new CodersArray(3, 8, 10, 2);
      const product = [3, 2];

      const expectedProduct = earlyProduct.filter((number) => number < 5);

      expect(product).toStrictEqual(expectedProduct);
    });
  });
});
