var ReportGroupApplication = function($, _, Backbone, ReportGroupTestDataCreator){

    var self = this;

    this.ReportType = {
        equity: {
            name: "Equity"
        },
        fixedIncome: {
            name: "Fixed Income"
        }
    };

    this.ReportGroup = Backbone.Model.extend({});

    this.ReportGroupCollection = Backbone.Collection.extend({
        model: this.ReportGroup
    });

    this.ReportGroupItemView = Backbone.View.extend({
        tagName: "li",
        template: _.template($('#reportGroupItemTemplate').html()),
        render:function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    this.ReportGroupListView = Backbone.View.extend({
        el: $("#reportGroupList"),

        initialize:function () {
            this.model.bind("reset", this.render, this);
        },

        render:function (eventName) {
            _.each(this.model.models, function (reportGroup) {
                $(this.el).append(new self.ReportGroupItemView({model:reportGroup}).render().el);
            }, this);
            return this;
        }
    });

    var testReportGroups =  ReportGroupTestDataCreator.createReportGroups();
    this.reportGroups = new this.ReportGroupCollection(testReportGroups);

    this.reportGroupListView = new this.ReportGroupListView({model:this.reportGroups});

    this.start = function(){
        this.reportGroupListView.render();
    };
};