describe("Tax Calculator Unit Tests", function() {
    it("should calculate tax correctly for low income", function() {
        expect(calculateTax(200000)).toEqual(0);
    });

    it("should calculate tax correctly for higher income", function() {
        expect(calculateTax(600000)).toBeGreaterThan(0);
    });
});
