var ReportGroupApplication = (
    function($, _, Backbone, ReportGroupTestDataCreator){

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

        reportGroupApplication.ReportGroupCollection = Backbone.Collection.extend({
            model: reportGroupApplication.ReportGroup
        });

        reportGroupApplication.ReportGroupListView = Backbone.View.extend({
            el: $("#reportGroupList"),

            initialize:function () {
                this.model.bind("reset", this.render, this);
            },

            render:function (eventName) {
                _.each(this.model.models, function (reportGroup) {
                    $(this.el).append(new reportGroupApplication.ReportGroupItemView({model:reportGroup}).render().el);
                }, this);
                return this;
            }
        });

        reportGroupApplication.ReportGroupItemView = Backbone.View.extend({
            tagName: "li",
            template: _.template($('#moobar').html()),
            render:function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            }
        });

        var testReportGroups =  ReportGroupTestDataCreator.createReportGroups();

        reportGroupApplication.reportGroups = new reportGroupApplication.ReportGroupCollection(testReportGroups);

        reportGroupApplication.reportGroupListView = new reportGroupApplication.ReportGroupListView({model:reportGroupApplication.reportGroups});
        reportGroupApplication.reportGroupListView.render();

        return reportGroupApplication;
    }
    )($, _, Backbone, ReportGroupTestDataCreator);