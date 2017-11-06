var options= [
          {selector: "#team-content",offset: 50, callback: function(el){


               Materialize.fadeInImage('#jakedesign');
               Materialize.fadeInImage('#jennyfront');

          }},
          {selector: "#team-content-two",offset: 50, callback: function(el){


               Materialize.fadeInImage('#rosemanage');
               Materialize.fadeInImage('#leroyapps');

          }},
          {selector: "#team-content-three",offset: 50, callback: function(el){


               Materialize.fadeInImage('#maryheist');
               Materialize.fadeInImage('#lisamobile');

          }},
        ];
        Materialize.scrollFire(options);
