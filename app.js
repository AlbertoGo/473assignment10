var main = function () {
    "use strict";

    //initialize module
    var app = angular.module('myApp',[]);

    //Define controller attacked to main view
    app.controller("main", function($scope){
        //initialize view models
        $scope.commentInput = "";
        $scope.comments = ["This is the first comment!", "Here's the second one!", "And this is one more.", "Here is another one!"];

        //Define method
        $scope.addCommentFromInputBox = function(){
            if($scope.commentInput !== ""){
                $scope.comments.push($scope.commentInput);
                $scope.commentInput = "";
            }
        };
    });
    /*
    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    }); */
};

$(document).ready(main);
