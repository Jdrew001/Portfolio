var app = angular.module('portfolio', ['ngRoute', 'firebase']);

//Routes for the Web Application
app.config(function($routeProvider, $sceDelegateProvider, $locationProvider) {
    $routeProvider

    //Home 
        .when('/', {
        controller: 'HomeController',
        templateUrl: 'Views/home.html'
    })

    //Services 
    .when('/tutorials', {
        controller: 'TutorialController',
        templateUrl: 'Views/Tutorials.html'
    })

    //Contact
    .when('/contact', {
        controller: 'ContactController',
        templateUrl: 'Views/Contact.html'
    })

    //Blog
    .when('/blog', {
        controller: 'BlogController',
        templateUrl: 'Views/Blog.html'
    })

    //Html Tutorials
    .when('/tutorials/html', {
        controller: 'HtmlController',
        templateUrl: 'Views/HtmlTut.html'
    })

    //css tutorals
    .when('/tutorials/css', {
        controller: 'CssController',
        templateUrl: 'Views/CssTut.html'
    })

    //Fundamentals
    .when('/tutorials/programmingFundamentals', {
        controller: 'FundamentalsController',
        templateUrl: 'Views/ProgrammingFun.html'
    })

    //languages 
    .when('/tutorials/programmingLanguages', {
        controller: 'LanguagesController',
        templateUrl: 'Views/ProgrammingLang.html'
    })
    
    .when('/admin', {
        controller: 'AdminController',
        templateUrl: 'Views/Admin.html'
    })
    
    //login
    .when('/login', {
        controller: 'LoginController',
        templateUrl: 'Views/Login.html'
    });

    //Enables Angular to use the video
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        '*://www.youtube.com/**'
    ]);
    
    $locationProvider.html5Mode = true;
});