var options= [
        {selector: "clientgallery",offset: 50, callback: function(el){
             Materialize.fadeInImage('#adbeus');
             Materialize.fadeInImage('#closeheat');
        }},
        {selector: "#clientgallery-content-two",offset: 50, callback: function(el){
             Materialize.fadeInImage('#eadbox');
             Materialize.fadeInImage('#kioskbrowser');
        }},
      ];
      Materialize.scrollFire(options);
