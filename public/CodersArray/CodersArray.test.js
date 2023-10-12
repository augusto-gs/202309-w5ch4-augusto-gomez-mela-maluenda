import CodersArray from "./CodersArray";
describe("Given a CodersArrays class", () => {
  describe("When you use push method with an number 2", () => {
    test("You should add the value to an array", () => {
      const product = new CodersArray(3, 8, 10, 2);
      product.push(1);
      const expectedProduct = { elements: [3, 8, 10, 2, 1] };

      expect(product).toEqual(expectedProduct);
    });
  });
});
