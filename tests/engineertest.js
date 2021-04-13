const Engineer = require("../js/engineer");

test("get Github username", () => {
  const inputValue = "GitHubUser";
  const em = new Engineer("Foo", 1, "hello@test.com", inputValue);
  expect(em.github).toBe(inputValue);
});

test("getRole() should return \"Engineer\"", () => {
  const inputValue = "Engineer";
  const em = new Engineer("Foo", 1, "hello@test.com", "GitHubUser");
  expect(em.getRole()).toBe(inputValue);
});

test("Can get GitHub username via getGithub()", () => {
  const inputValue = "GitHubUser";
  const em = new Engineer("Foo", 1, "hello@test.com", inputValue);
  expect(em.getGithub()).toBe(inputValue);
});