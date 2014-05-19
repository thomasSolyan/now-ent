
function TodoCtrl($scope) {
	$scope.todos = [
		{text: 'Learn Angular', done: false},
		{text: 'Build an app', done: false}
	];

	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	};

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return !todo.done;
		});
	};

	$scope.addTodo = function() {
		$scope.todos.push({text: $scope.formTodoText, done: false});
		$scope.formTodoText = '';
	};
};

var firstModule = angular.module('firstModule', []),
	controllers = {TodoCtrl: TodoCtrl},
	template = '<div data-ng-controller="TodoCtrl"><h2>Total todos: {{ getTotalTodos() }}</h2><ul class="unstyled"><li data-ng-repeat="todo in todos"><input type="checkbox" data-ng-model="todo.done"> <span class="done-{{ todo.done }}">{{ todo.text }}</span></li></ul><form class="form-horizontal"><input type="text" data-ng-model="formTodoText" data-ng-model-instant> <button class="btn" data-ng-click="addTodo()"><i class="glyphicon-plus"></i> Add</button></form><button class="btn-large" data-ng-click="clearCompleted()"><i class="glyphicon-trash"></i> Clear Completed</button></div>'

$('#template').html(template);
firstModule.controller(controllers);
