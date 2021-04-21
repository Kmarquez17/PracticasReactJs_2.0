describe("Pruebas en el archivo demo.test.js", () => {
  test("deben ser iguales los strings", () => {
    //1. Inicializacion
    const msj = "Hola";

    //2.Estimulos
    const mjs2 = `Hola`;

    //3. Observar  comportamiento
    expect(msj).toBe(mjs2);
  });
});
