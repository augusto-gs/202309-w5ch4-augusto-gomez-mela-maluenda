import CodersArray from "./CodersArray";
describe("Given a push method", () => {
  describe("When you receive an instance of CodersArray with { elements: [3, 8, 10, 2] and push a value 1}", () => {
    test("You should receive { elements: [3, 8, 10, 2, 1] }", () => {
      const product = new CodersArray(3, 8, 10, 2);
      product.push(1);
      const expectedProduct = { elements: [3, 8, 10, 2, 1] };

      expect(product).toEqual(expectedProduct);
    });
  });

  describe("When you receive an instance of CodersArray with { elements: [3, 8, 10, 2] and push a value of 1 and 3}", () => {
    test("You should receive { elements: [3, 8, 10, 2, 1] }", () => {
      const product = new CodersArray(3, 8, 10, 2);
      product.push(1, 3);
      const expectedProduct = { elements: [3, 8, 10, 2, 1] };

      expect(product).toEqual(expectedProduct);
    });
  });
});
