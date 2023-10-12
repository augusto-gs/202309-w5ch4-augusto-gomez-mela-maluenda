import CodersArray from "./CodersArray";

describe("Given a CodersArray class lenght method", () => {
  describe("when it receives by argument the value (3, 1, 10, 7)", () => {
    test("then it should return 3", () => {
      const valueA = new CodersArray(3, 1, 10, 7);
      const expectedResult = 4;

      const product = valueA.length();

      expect(product).toBe(expectedResult);
    });
  });

  describe("when it recives by argument the value ('green`, `red`)", () => {
    test("then it should return 2", () => {
      const valueA = new CodersArray("green", "red");
      const expectedResult = 2;

      const product = valueA.length();

      expect(product).toBe(expectedResult);
    });
  });
});
