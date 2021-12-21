const yaml = require("./test.yaml");
test("It reads yaml correctly", () => {
  expect(yaml).toEqual([{ yaml: "jest" }]);
});
