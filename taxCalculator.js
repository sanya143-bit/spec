function calculateTax(amount) {
    if (amount <= 200000) {
        return 0;
    }
    return (amount - 200000) * 0.1;
}

describe("Tax Calculator Unit Tests", function() {
    it("should calculate tax correctly for low income", function() {
        expect(calculateTax(200000)).toEqual(0);
    });

    it("should calculate tax correctly for higher income", function() {
        expect(calculateTax(600000)).toBeGreaterThan(0);
    });

    // Baaki ke 5 test cases yahan jodein:
    it("should handle test case 3", function() {
        // expect(...)
    });

    it("should handle test case 4", function() {
        // expect(...)
    });

    it("should handle test case 5", function() {
        // expect(...)
    });

    it("should handle test case 6", function() {
        // expect(...)
    });

    it("should handle test case 7", function() {
        // expect(...)
    });
});