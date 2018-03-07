angular.module("starter").controller("PrincipalController", function($state) {
  var vm = this;
  vm.resultado = '';
  vm.somaDoisNumeros = somaDoisNumeros;
  function somaDoisNumeros(numeroUm, numeroDois) {
    vm.resultado = parseInt(numeroUm) + parseInt(numeroDois);
  }
});
