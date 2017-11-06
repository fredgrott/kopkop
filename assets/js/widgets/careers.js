var options= [
        {selector: "#careers",offset: 50, callback: function(el){


             Materialize.fadeInImage('#lifeatstoic');
             Materialize.fadeInImage('#whyjoinstoic');

        }},
        {selector: "#weenjoy",offset: 50, callback: function(el){


             Materialize.showStaggeredList($(el));
        }},
        {selector: "#whyjoinstoicdesign",offset: 50, callback: function(el){


             Materialize.showStaggeredList($(el));
        }},
        {selector: "#openings",offset: 50, callback: function(el){


             $('#currentopenings').toggleClass('scale-in');
        }},
        {selector: "#srphpdev",offset: 50, callback: function(el){


             Materialize.showStaggeredList($(el));
        }},
        {selector: "#srphpdevapplynow",offset: 50, callback: function(el){


             Materialize.showStaggeredList($(el));
        }},
        {selector: "#htmldev",offset: 50, callback: function(el){


             Materialize.showStaggeredList($(el));
        }},
        {selector: "#htmldevapplynow",offset: 50, callback: function(el){


             Materialize.showStaggeredList($(el));
        }},
      ];
      Materialize.scrollFire(options);
