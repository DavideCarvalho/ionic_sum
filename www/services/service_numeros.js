angular.module('starter').service('serviceNumeros', serviceNumeros)

serviceNumeros.$inject = [];

function serviceNumeros() {
  const vm = this;
  vm.somaDoisNumeros = somaDoisNumeros;
  function somaDoisNumeros(numeroUm, numeroDois) {
    return parseInt(numeroUm)+parseInt(numeroDois)
  }
}