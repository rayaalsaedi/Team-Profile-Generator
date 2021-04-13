
const Employee = require("../js/employee");

describe("Employee", () => {
    it("to find employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("can find the name constructor", () => {
        const name = "Mark";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("set id", () => {
        const inputValue = 100;
        const em = new Employee("test", inputValue);
        expect(em.id).toBe(inputValue);
    });

    it("Can set email", () => {
        const inputValue = "test@test.com";
        const em = new Employee("test", 1, inputValue);
        expect(em.email).toBe(inputValue);
    });

    describe("findName", () => {
        it("Can get name by running findName()", () => {
            const inputValue = "Mark";
            const em = new Employee(inputValue);
            expect(em.getName()).toBe(inputValue);
        });
    });
        
    describe("findId", () => {
        it("Can get id by findId()", () => {
            const inputValue = 100;
            const em = new Employee("test", inputValue);
            expect(em.getId()).toBe(inputValue);
        });
    });
        
    describe("findEmail", () => {
        it("Can get email by findEmail()", () => {
            const inputValue = "helloworld@test.com";
            const em = new Employee("test", 1, inputValue);
            expect(em.getEmail()).toBe(inputValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() will return \"Employee\"", () => {
            const inputValue = "Employee";
            const em = new Employee("Mark", 1, "helloworld@test.com");
            expect(em.getRole()).toBe(inputValue);
        });
    });
    
});