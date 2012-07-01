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

describe("ReportGroupListView", function(){

    var app;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
        var main = new app.Main();
        main.list();
    });

    afterEach(function(){
        $("#reportGroupList li").remove();
    });

    it("should add correct number of line items to the ReportGroup list", function(){
        var lineItemCount = $("#reportGroupList li").length;
        expect(lineItemCount).toEqual(5)
    });

    it("should add the correct lable to the ReportGroup list item", function () {
        var firstItem = $("#reportGroupList li")[0];
        expect($(firstItem).text()).toContain("2 - Equity SMA US")
    });

});
