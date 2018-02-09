angular.module("myApp", []);

angular.module("myApp").controller("desafioCtrl", function($scope) {
    $scope.pessoas = [
        {"nome":"EDJAN SOUZA SANTOS","dtNascimento":"14/05/1988","sexo":"masculino"},
        {"nome":"ANGELINA JOLIE SOLTEIRA","dtNascimento":"01/01/1975","sexo":"feminino"},
        {"nome":"CESAR RAMALHO AMARAL","dtNascimento":"22/12/1949","sexo":"masculino"},
        {"nome":"PAULA DA COSTA SANTOS","dtNascimento":"08/04/2000","sexo":"feminino"}
                     ];
    $scope.addPessoa = function (pessoa)  {
            $scope.pessoas.push(pessoa);
            delete $scope.pessoa;
    };
    $scope.showForm = function() {
        document.getElementById("form").style.display= "block";
    };
    $scope.cancel  = function (pessoa) {
        delete $scope.pessoa;
        document.getElementById("form").style.display= "none";
    };
    $scope.ordenarPor = function(campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };
     $scope.filtrarSexo = function(campo) {
        $scope.criterioFiltro = campo;
    };
});
 
