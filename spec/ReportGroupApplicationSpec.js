describe("Report Types", function(){

    var app;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
    });

    it("should have static equity property", function(){
        expect(app.ReportType.equity).toBeDefined();
    });

    it("should have equity object with expected properties", function(){
        expect(app.ReportType.equity.name).toEqual("Equity");
    });

    it("should have fixed income property", function () {
        expect(app.ReportType.fixedIncome).toBeDefined();
    });

    it("should have fixed income object with name property", function () {
        expect(app.ReportType.fixedIncome.name).toEqual("Fixed Income");
    });
});

describe("reports array", function(){
    var app;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
    });

    it("should be defined", function () {
        expect(app.reports).toBeDefined();
    });

    it("should have some values in the array", function () {
        expect(app.reports.length).toBeGreaterThan(0);
    });
});

describe("ReportGroup class", function(){
    var app;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
    });

    it("should support new", function () {
        var g = new app.ReportGroup();

        expect(g).toBeDefined();
    });
});

describe("ReportGroupCollection class", function(){
    var app;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
    });

    it("should support new", function () {
        var c = new app.ReportGroupCollection();

        expect(c).toBeDefined();
    });
});

//describe("ReportGroupListView class", function(){
//    var app;
//
//    beforeEach(function(){
//        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
//    });
//
//    it("should support new", function () {
//        var v = new app.ReportGroupListView();
//
//        expect(v).toBeDefined();
//    });
//});