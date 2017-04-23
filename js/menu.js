//Model
var menuItemsArray = [
    {"FORM_NAME": "home.html", "MENU_NO": "10", "DISPLAY_TEXT": "Home"},
    {"FORM_NAME": "myprofile.html", "MENU_NO": "15", "DISPLAY_TEXT": "My Profile"},
    {"FORM_NAME": "nglessons.html", "MENU_NO": "20", "DISPLAY_TEXT": "Lessons"},
    {"FORM_NAME": "ngquizzes.html", "MENU_NO": "30", "DISPLAY_TEXT": "Quizzes"},
    {"FORM_NAME": "ngexercises.html", "MENU_NO": "50", "DISPLAY_TEXT": "Exercises"},
    {"FORM_NAME": "logout.html", "MENU_NO": "60", "DISPLAY_TEXT": "Logout"}
];

//NG-App
var app = angular.module('menuApp', ['ngAnimate']);

//NG-Controller
app.controller('menuCtrl', function ($scope) {
    $scope.menuItems = menuItemsArray;
    $scope.userName = 'Rohita Goparaju';
    $scope.showMenu = false;
    $scope.showMenuFn = function () {
        $scope.showMenu = !$scope.showMenu;
    };
});
 