/**
 * Created by slastra on 02-06-16.
 */
(function(){
  'use strict';

  angular.module('elgrafico-ionic').factory('elgraficoApi', ['$http', '$q', elgraficoApi]);

  function elgraficoApi($http, $q){


    function getNews(){
      var deferred = $q.defer();
      $http.get("https://elgrafico.herokuapp.com/futbolchileno/getAllLastNews")
        .success(function(data, status){
          var bigArray = [].concat.apply([], data);
          console.log("Recibiendo noticias ", bigArray, status);
          deferred.resolve(bigArray);
        })
        .error(function(){
          console.error("Error en la llamada HTTP.");
          deferred.reject();
        });
      return deferred.promise;
    }

    return {
      getNews: getNews
    };
  }

})();
