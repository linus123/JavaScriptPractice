var ReportGroupApplication = (
    function(Backbone, ReportGroupTestDataCreator){

        var reportGroupApplication = {};

        reportGroupApplication.ReportType = {
            equity: {
                name: "Equity"
            },
            fixedIncome: {
                name: "Fixed Income"
            }
        };

        reportGroupApplication.reports = ReportGroupTestDataCreator.createReports();

        reportGroupApplication.ReportGroup = Backbone.Model.extend({});

        return reportGroupApplication;
    }
    )(Backbone, ReportGroupTestDataCreator);