describe("Todo model", function() {
    describe("when instantiated", function() {

        beforeEach(function(){
            this.todo = new TodoApplication.Todo({
                title: "Rake Leaves"
            });
        });

        it("should exhibit attributes", function() {
            expect(this.todo.get("title")).toEqual("Rake Leaves");
        });

        it("should set the priority to default", function(){
            expect(this.todo.get("priority")).toEqual(3);
        });
    });

    describe("foo", function(){
        this.todoStub = sinon.stub(window, "Todo");
        this.model = new Backbone.Model({
            id: 5,
            title: "Foo"
        });
        this.todoStub.returns(this.model());
    });
});