
describe("Jasmine Matchers", function () {
    it("allows for === and deep equality", function () {
        expect(1 + 1).toBe(2);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
    it("allows for easy precision checking", function () {
        expect(3.1415).toBeCloseTo(3.14, 2);
    });
    it("allows for easy truthy / falsey checking", function () {
        expect(0).toBeFalsy();
        expect([]).toBeTruthy();
    });
    it("allows for easy type checking", function () {
        expect([]).toEqual(jasmine.any(Array));
        expect(function () { }).toEqual(jasmine.any(Function));
    });
    it("allows for checking contents of an object", function () {
        expect([1, 2, 3]).toContain(1);
        expect({ name: 'Elie', job: 'Instructor' }).toEqual(jasmine.objectContaining({ name: 'Elie' }));
    });
});