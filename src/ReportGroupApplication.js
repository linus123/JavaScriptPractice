var ReportGroupApplication = (
    function(Backbone){

        var reportGroupApplication = {};

        reportGroupApplication.ReportType = {
            equity: {
                name: "Equity"
            },
            fixedIncome: {
                name: "Fixed Income"
            }
        };

        reportGroupApplication.Report = Backbone.Model.extend({});

        reportGroupApplication.ReportGroup = Backbone.Model.extend({});

        return reportGroupApplication;
    }
    )(Backbone);