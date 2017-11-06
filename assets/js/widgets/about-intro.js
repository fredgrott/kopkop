var options= [
        {selector: "#intro-content",offset: 50, callback: function(el){


             Materialize.fadeInImage('#humble');
             Materialize.fadeInImage('#founder');
        }},

      ];
      Materialize.scrollFire(options);
