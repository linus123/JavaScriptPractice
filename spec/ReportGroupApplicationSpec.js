describe("ReportGroupApplication", function(){

    beforeEach(function() {
        var app = new ReportGroupApplication($, _, Backbone, ReportGroupTestDataCreator);
        app.start();
    });

    it("should add correct number of line items to the ReportGroup list", function(){
        var lineItemCount = $("#reportGroupList li").length;
        expect(lineItemCount).toEqual(5)
    });

    it("should add the correct lable to the ReportGroup list item", function () {
        var firstItem = $("#reportGroupList li")[0];
        expect($(firstItem).text()).toContain("2 - Equity")
    });

    afterEach(function(){
        $("#reportGroupList li").remove();
    });
});
