describe('angularjs homepage todo list', function() {
	it('should add a todo', function() {
		browser.get('https://angularjs.org');

		element(by.model('todoList.todoText')).sendKeys('Writing tests!!');
		element(by.css('[value="add"]')).click();

    //Use .all since there are multiple todos on list.
		var todoList = element.all(by.repeater('todo in todoList.todos'));
		expect(todoList.count()).toEqual(3);
		expect(todoList.get(2).getText()).toEqual('Writing tests!!');
	});
});