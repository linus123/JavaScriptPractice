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

        render: function (eventName) {
            _.each(this.model.models, function (reportGroup) {
                $(this.el).append(new self.ReportGroupItemView({model:reportGroup}).render().el);
            }, this);
            return this;
        }
    });

    this.ReportGroupEditView = Backbone.View.extend({
        el: $("#formDiv"),
        template:_.template($("#reportGroupEditTemplate").html()),
        render: function(eventName){
            $(this.el).html(this.template(this.model.toJSON()));
        }
    });

    this.Main = Backbone.Router.extend({

        routes:{
            "" : "list",
            "reportGroup/:id" : "reportGroup"
        },

        list: function () {
            if (!self.reportGroups)
            {
                var testReportGroups =  ReportGroupTestDataCreator.createReportGroups();
                self.reportGroups = new self.ReportGroupCollection(testReportGroups);
                self.reportGroupListView = new self.ReportGroupListView({model:self.reportGroups});
                self.reportGroupListView.render();
            }
        },

        reportGroup: function(id){
            var targetReportGroup = self.reportGroups.get(id);
            var editView = new self.ReportGroupEditView({model: targetReportGroup});
            editView.render();
        }
    });

    this.start = function(){
        var mainApp = new this.Main();
        Backbone.history.start();
    };
};