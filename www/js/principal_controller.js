angular.module("starter").controller("PrincipalController", principalController);

function principalController(serviceNumeros) {
  const vm = this;
  vm.resultado = '';
  vm.somaDoisNumeros = somaDoisNumeros;
  function somaDoisNumeros(numeroUm, numeroDois) {
    vm.resultado = serviceNumeros.somaDoisNumeros(numeroUm, numeroDois);
  }
}

principalController.$inject = ['serviceNumeros'];
