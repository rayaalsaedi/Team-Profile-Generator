const Manager = require("../js/manager");

test("set office number", () => {
  const inputValue = 200;
  const em = new Manager("Foo", 1, "test@test.com", inputValue);
  expect(em.officeNumber).toBe(inputValue);
});

test("getRole()  returns \"Manager\"", () => {
  const inputValue = "Manager";
  const em = new Manager("Foo", 1, "test@test.com", 200);
  expect(em.getRole()).toBe(inputValue);
});

test("get the office number by getOffice()", () => {
  const inputValue = 200;
  const em = new Manager("Foo", 1, "test@test.com", inputValue);
  expect(em.getOfficeNumber()).toBe(inputValue);
});