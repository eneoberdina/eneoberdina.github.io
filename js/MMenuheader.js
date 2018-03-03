     jQuery(document).ready(function( $ ) {
      $ jQuery(document).ready(function( $ ) {
      $("#site-navigation").mmenu({
         "slidingSubmenus": false,
         "offCanvas": {
            "pageSelector": "#page",
            "inset":".sub-menu"
         },
         "extensions": [ 
            "pagedim-black",
            "theme-dark"
         ],
          "navbars": [ 
            {
               "position": "top",
               "height":2, 
               "content": "<div class=\"mmenu-brending\"><a href=\"http://"+window.location.hostname+"/\" title=\"На главную страницу сайта\">Главная страница</a></div>" 
            }, 
            {
               "position": "bottom",
               "content": [
                  "<a class='fa fa-envelope' href='#/'></a>",
                  "<a class='fa fa-twitter' href='#/'></a>"
               ]
            }
         ]
      }, {
   clone: true
});
   });