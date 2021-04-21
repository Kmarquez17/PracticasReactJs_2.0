import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
import { getHeroeByIdAsync } from "../../base/09-promesas";

describe("Pruebas en 09-promesas.js", () => {
  test("getHeroeByIdAsync debe retornar un heroe async ", (done) => {
    const ID = 1;

    getHeroeByIdAsync(ID).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("debe obtener un error si heroe por ID no existe ", (done) => {
    const ID = 10;

    getHeroeByIdAsync(ID).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
