import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-deses-arr.js", () => {
  test("debe de retornar un string y un numero ", () => {
    const [letras, numeros] = retornaArreglo(); // ["ABC", 123];
    // expect(arr).toEqual(["ABC", 123]);

    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });
});
