describe("Report Types", function(){
    it("should have static equity property", function(){
        expect(ReportGroupApplication.ReportType.equity).toBeDefined();
    });

    it("should have equity object with expected properties", function(){
        expect(ReportGroupApplication.ReportType.equity.name).toEqual("Equity");
    });

    it("should have fixed income property", function () {
        expect(ReportGroupApplication.ReportType.fixedIncome).toBeDefined();
    });

    it("should have fixed income object with name property", function () {
        expect(ReportGroupApplication.ReportType.fixedIncome.name).toEqual("Fixed Income");
    });
});

describe("reports array", function(){
    it("should be defined", function () {
        expect(ReportGroupApplication.reports).toBeDefined();
    });

    it("should have some values in the array", function () {
        expect(ReportGroupApplication.reports.length).toBeGreaterThan(0);
    });
});

describe("ReportGroup class", function(){
    it("should support new", function () {
        var g = new ReportGroupApplication.ReportGroup();

        expect(g).toBeDefined();
    });
});