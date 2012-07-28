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
    var main;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
        main = new app.Main();
        main.list();
    });

    afterEach(function(){
        $("#reportGroupList li").remove();
    });

    it("should add correct number of line items to the ReportGroup list", function(){
        var lineItemCount = $("#reportGroupList li").length;
        expect(lineItemCount).toEqual(5)
    });

    it("should add the correct label to the ReportGroup list item", function () {
        var firstItem = $("#reportGroupList li")[0];
        expect($(firstItem).text()).toContain("2 - Equity SMA US")
    });

    it("should add the correct link on the label", function () {
        var firstItem = $("#reportGroupList li a")[0];
        expect($(firstItem).attr("href")).toEqual("#/reportGroup/2")
    });

    it("should only allow us to list once", function () {
        main.list();
        var lineItemCount = $("#reportGroupList li").length;
        expect(lineItemCount).toEqual(5)
    });

});

describe("ReviewGroupEditView when id given in url", function(){
    var app;
    var main;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
        main = new app.Main();
        main.reportGroup(2);
    });

    afterEach(function(){
        $("#reportGroupList li").remove();
        $("#formDiv div").remove();
    });

    it("should set the id input", function () {
        expect($("#id").text()).toEqual("2");
    });

    it("should set the name input", function () {
        expect($("#name").val()).toEqual("Equity SMA US");
    });

    it("should populate the correct number of items in the report group type drop down", function () {
        var selectOptions = $("#groupTypeSelect option");
        expect(selectOptions.length).toEqual(4);
    });
});

describe("ReviewGroupEditView when edit is made", function(){
    var app;
    var main;

    beforeEach(function(){
        app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
        main = new app.Main();
        main.reportGroup(2);
        $("#name").val("123");
        $("#saveButton").click();
    });

    afterEach(function(){
        $("#reportGroupList li").remove();
        $("#formDiv div").remove();
    });

    it("should set the name property", function () {
        var reportGroup = app.reportGroups.get(2);
        expect(reportGroup.get("name")).toEqual("123");
    });

    it("should change the name of the changed list itme", function () {
        var firstItem = $("#reportGroupList li")[0];
        expect($(firstItem).text()).toContain("2 - 123")
    });
});
