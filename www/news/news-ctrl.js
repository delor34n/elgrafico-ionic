/**
 * Created by slastra on 02-06-16.
 */
(function(){
  'use strict';

  angular.module('elgrafico-ionic').controller('NewsCtrl', ['elgraficoApi', NewsCtrl]);

  function NewsCtrl(elgraficoApi){

    var vm = this;
    vm.news = elgraficoApi.getNews();
  }

})();
