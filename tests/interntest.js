const Intern = require("../js/intern");

test("find school name", () => {
  const inputValue = "UW";
  const em = new Intern("Foo", 1, "test@test.com", inputValue);
  expect(em.school).toBe(inputValue);
});

test("getRole() should return \"Intern\"", () => {
  const inputValue = "Intern";
  const em = new Intern("Foo", 1, "test@test.com", "UW");
  expect(em.getRole()).toBe(inputValue);
});

test("Can get school via getSchool()", () => {
  const inputValue = "UW";
  const em = new Intern("Foo", 1, "test@test.com", inputValue);
  expect(em.getSchool()).toBe(inputValue);
});