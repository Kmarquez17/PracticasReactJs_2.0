import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe("Pruebas en 08-imp-exp.test.js", () => {
  test("debe retornar un heroe por ID", () => {
    const ID = 1;
    const hereo = getHeroeById(ID);

    const heroeData = heroes.find((h) => h.id === ID);

    expect(hereo).toEqual(heroeData);
  });

  test("debe retornar un Undefined si heroe no existe", () => {
    const ID = 10;
    const hereo = getHeroeById(ID);   

    expect(hereo).toBe(undefined);
  });

  test("debe retornar un array de heroes por su categoria DC", () => {
    const owner = "DC";
    const hereo = getHeroesByOwner(owner);

    const heroeData = heroes.filter((h) => h.owner === owner);

    expect(hereo).toEqual(heroeData);
  });

  test("debe retornar un array de heroes por su categoria Marvel", () => {
    const owner = "Marvel";
    const hereo = getHeroesByOwner(owner);
    expect(hereo.length).toBe(2);
  });
});
