var app = angular.module('portfolio', ['ngRoute', 'firebase']);

//Routes for the Web Application
app.config(function($routeProvider, $sceDelegateProvider, $locationProvider) {
    $routeProvider

    //Home 
        .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })

    //Services 
    .when('/tutorials', {
        controller: 'TutorialController',
        templateUrl: 'views/Tutorials.html'
    })

    //Contact
    .when('/contact', {
        controller: 'ContactController',
        templateUrl: 'views/Contact.html'
    })

    //Blog
    .when('/blog', {
        controller: 'BlogController',
        templateUrl: 'views/Blog.html'
    })

    //Html Tutorials
    .when('/tutorials/html', {
        controller: 'HtmlController',
        templateUrl: 'views/HtmlTut.html'
    })

    //css tutorals
    .when('/tutorials/css', {
        controller: 'CssController',
        templateUrl: 'views/CssTut.html'
    })

    //Fundamentals
    .when('/tutorials/programmingFundamentals', {
        controller: 'FundamentalsController',
        templateUrl: 'views/ProgrammingFun.html'
    })

    //languages 
    .when('/tutorials/programmingLanguages', {
        controller: 'LanguagesController',
        templateUrl: 'views/ProgrammingLang.html'
    })
    
    .when('/admin', {
        controller: 'AdminController',
        templateUrl: 'views/Admin.html'
    })
    
    //login
    .when('/login', {
        controller: 'LoginController',
        templateUrl: 'views/Login.html'
    });

    //Enables Angular to use the video
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        '*://www.youtube.com/**'
    ]);
    
    $locationProvider.html5Mode = true;
});