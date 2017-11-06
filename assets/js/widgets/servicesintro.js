var options= [
        {selector: "#services-intro",offset: 50, callback: function(el){
             Materialize.fadeInImage('#ourservices');
             Materialize.fadeInImage('#freequotes');
        }},
        {selector: "#ourserviceslist",offset: 50, callback: function(el){
             Materialize.showStaggeredList($(el));
        }},
      ];
      Materialize.scrollFire(options);
