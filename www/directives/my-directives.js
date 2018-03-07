angular.module('starter')
  .directive('onlyNum', function () {
    return function (scope, element, attrs) {

      var keyCode = [48,49,50,51,52,53,54,55,56,57];
      element.bind("keydown", function (event) {
        //console.log($.inArray(event.which,keyCode));
        if ($.inArray(event.which, keyCode) === -1) {
          scope.$apply(function () {
            scope.$eval(attrs.onlyNum);
            event.preventDefault();
          });
          event.preventDefault();
        }

      });
    };
  });