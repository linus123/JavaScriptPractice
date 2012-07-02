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

        initialize:function () {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render:function (eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },

        close:function () {
            $(this.el).unbind();
            $(this.el).remove();
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

        events: {
            "click #saveButton" : "saveButtonClicked"

        },

        render: function(eventName){
            $(this.el).html(this.template(this.model.toJSON()));
        },

        saveButtonClicked : function(){
            this.model.set("name", $("#name").val());
            return false;
        }
    });

    var renderListView = function(){
        var testReportGroups =  ReportGroupTestDataCreator.createReportGroups();
        self.reportGroups = new self.ReportGroupCollection(testReportGroups);
        self.reportGroupListView = new self.ReportGroupListView({model:self.reportGroups});
        self.reportGroupListView.render();
    };

    var renderListViewIfNoAlreadyRendered = function(){
        if (!self.reportGroups) {
            renderListView();
        }
    }

    this.Main = Backbone.Router.extend({

        routes:{
            "" : "list",
            "reportGroup/:id" : "reportGroup"
        },

        list: function () {
            renderListViewIfNoAlreadyRendered();
        },

        reportGroup: function(id){
            renderListViewIfNoAlreadyRendered();

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