/**
 * Created by slastra on 02-06-16.
 */
(function(){
  'use strict';

  angular.module('elgrafico-ionic').factory('elgraficoApi', [elgraficoApi]);

  function elgraficoApi(){

    var news = JSON.parse('[{"img_url":"http://elgraficochile.cl/prontus_elgrafico/site/artic/20160503/imag/foto_0000000320160503171552.png","title":"La formación del golpeado O’Higgins que buscará el premio de consuelo ante Iquique","noticia_url":"http://elgraficochile.cl/la-formacion-del-golpeado-o-higgins-que-buscara-el-premio-de-consuelo/prontus_elgrafico/2016-05-03/171552.html","fecha_noticia":["2016-05-03"]},{"img_url":"http://elgraficochile.cl/prontus_elgrafico/site/artic/20160503/imag/foto_0000002720160503164635.jpg","title":"El once con que Iquique espera darle el golpe de gracia a un alicaído O\'Higgins","noticia_url":"http://elgraficochile.cl/el-once-con-que-iquique-espera-darle-el-golpe-de-gracia-a-un-alicaido/prontus_elgrafico/2016-05-03/164635.html","fecha_noticia":["2016-05-03"]},{"img_url":"http://elgraficochile.cl/prontus_elgrafico/site/artic/20160504/imag/foto_0000002920160504141829.jpg","title":"Sin Pizarro: La formación con la que Wanderers buscará redimirse en la postemporada","noticia_url":"http://elgraficochile.cl/sin-pizarro-la-formacion-con-la-que-wanderers-buscara-redimirse-en-la/prontus_elgrafico/2016-05-04/141829.html","fecha_noticia":["2016-05-04"]},{"img_url":"http://elgraficochile.cl/prontus_elgrafico/site/artic/20160504/imag/foto_0000002720160504134007.jpg","title":"La oncena de Antofagasta para iniciar la ilusión hacia la Copa Sudamericana","noticia_url":"http://elgraficochile.cl/la-oncena-de-antofagasta-para-iniciar-la-ilusion-hacia-la-copa/prontus_elgrafico/2016-05-04/134007.html","fecha_noticia":["2016-05-04"]},{"img_url":"http://elgraficochile.cl/prontus_elgrafico/site/artic/20160504/imag/foto_0000001120160504125832.jpg","title":"La ANFP ratificó amistoso de la Roja con Jamaica en Viña del Mar","noticia_url":"http://elgraficochile.cl/la-anfp-ratifico-amistoso-de-la-roja-con-jamaica-en-vina-del-mar/prontus_elgrafico/2016-05-04/125832.html","fecha_noticia":["2016-05-04"]}]');

    function getNews(){
      return news;
    }

    return {
      getNews: getNews
    };
  }

})();
