var app = angular.module('app', ['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        
        
        $routeProvider.when('/',
        {
            templateUrl:'views/about.html',
            controller:'AboutController'
        }).when('/about',
        {
            templateUrl:'views/about.html',
            controller:'AboutController'
        })
	.when('/actions',
        {
            templateUrl:'views/actions.html',
            controller:'ActionsController'
         })
	.when('/order',
        {
            templateUrl:'views/order.html',
            controller:'OrderController'
         })
	.when('/contacts',
        {
            templateUrl:'views/contacts.html',
            controller:'ContactsController'
        })
	.when('/location',
        {
            templateUrl:'views/location.html',
            controller:'LocationController'
        })
	.when('/pricelist',
        {
            templateUrl:'views/pricelist.html',
            controller:'PricelistController'
        })
	.when('/productions',
        {
            templateUrl:'views/productions.html',
            controller:'ProductsController'
        }).when('/productions/:id',
        {
            templateUrl:'views/production.html',
            controller:'ProductController'
        }).otherwise({ 
      		redirectTo: '/' 
    });
        
}]);
 app.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) 
      {
        if (attr.type==='text/javascript-lazy') 
        {
          var s = document.createElement("script");
          s.type = "text/javascript";                
          var src = elem.attr('src');
          if(src!==undefined)
          {
              s.src = src;
          }
          else
          {
              var code = elem.text();
              s.text = code;
          }
          document.head.appendChild(s);
          elem.remove();
        }
      }
    };
  });