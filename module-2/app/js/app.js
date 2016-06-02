var app = angular.module("chripApp", []);

app.controller('mainController', function($scope){
	$scope.posts = [];
	$scope.newPost = {created_by:'', text:'', create_at:''};

	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {created_by:'', text:'', create_at:''};
	};

});
