let app = angular.module("app", []);



app.controller("appController", [class AppController {

}]);

var source = Rx.Observable.from([1, 2]);

source.subscribe( x => console.log(x));


