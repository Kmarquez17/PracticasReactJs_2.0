import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas 02-template-string.js", () => {
  test("getSaludo debe retornar un nombre", () => {
    const nombre = "Kevin";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  //get saludo debe de retonar Hola Alberto si no hay argumentos
  test("getSaludo debe retornar un Hola Alberto si no hay argumentos", () => {
    const nombre = "Alberto";

    const saludo = getSaludo();

    expect(saludo).toBe("Hola " + nombre);
  });
});
