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

            var groupTypeSelect = $("#groupTypeSelect");

            groupTypeSelect.append("<option value=''></option>");

            _.each(self.reportGroupTypes, function(t) {
                groupTypeSelect.append("<option value='" + t.code + "'>" + t.name  + "</option>");
            });
        },

        saveButtonClicked : function(){
            this.model.set("name", $("#name").val());
            return false;
        },

        remove : function() {
            $(this.el).unbind();
            $(this.el).empty();
        }
    });

    var renderListView = function(){
        var testReportGroups =  ReportGroupTestDataCreator.createReportGroups();
        self.reportGroupTypes = ReportGroupTestDataCreator.createReportGroupTypes();
        self.reportGroups = new self.ReportGroupCollection(testReportGroups);
        if (self.reportGroupListView) {
            self.reportGroupListView.remove();
        }
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

            if (self.editView) {
                self.editView.remove();
                self.editView = undefined;
            }
            self.editView = new self.ReportGroupEditView({model: targetReportGroup});
            self.editView.render();
        }
    });

    this.start = function(){
        var mainApp = new this.Main();
        Backbone.history.start();
    };
};