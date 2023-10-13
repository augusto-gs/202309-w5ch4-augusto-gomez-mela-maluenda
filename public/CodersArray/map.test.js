import CodersArray from "./CodersArray";

describe("Given a map method", () => {
  describe("When you receive an instance of CodersArray with { elements: [3, 8, 10, 2] and use map metrhod with a callback function(number) => number * 5)", () => {
    test("You should receive an array [ 15, 40, 50, 10 ]", () => {
      const earlyProduct = new CodersArray(3, 8, 10, 2);
      const product = [15, 40, 50, 10];

      const expectedProduct = earlyProduct.map((number) => number * 5);

      expect(product).toStrictEqual(expectedProduct);
    });
  });

  describe("When you receive an instance of CodersArray with { elements: 'Hello', 'Goodbye', 'Hola', 'Adios'}", () => {
    test("You should receive an array ['Hello0', 'Goodbye1', 'Hola2', 'Adios3']", () => {
      const earlyProduct = new CodersArray("Hello", "Goodbye", "Hola", "Adios");
      const product = ["Hello0", "Goodbye1", "Hola2", "Adios3"];

      const expectedProduct = earlyProduct.map(
        (word, position) => word + position,
      );

      expect(product).toStrictEqual(expectedProduct);
    });
  });
});
