TodoApplication = (function(Backbone){
    var app = {};

    app.Todo = Backbone.Model.extend({
        defaults: {
            "priority" : 3
        }
    });

    return app;
})(Backbone);
