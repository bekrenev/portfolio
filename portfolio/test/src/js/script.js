// $(function() {
//     $( "#accordion" ).accordion({
//       active: 1,
//       collapsible: true,
//       header: "li.menu__element",
//       icons: {
//         "header": "ui-icon-carat-1-ne",
//         "activeHeader": "ui-icon-carat-1-se"
//       }
//     });
//   });

// ******************** M E N U ********************

$(document).ready(function() {
  $("ul.menu__drop").not(":first").hide();
  
  $("ul.menu li.menu__element").on("click", function(){
    
    var menuDrop = $(this).next();
    var menu = $(this).closest(".menu");
    
    if(menuDrop.is(":visible")) {
      menuDrop.slideUp(500);     
    }
    else {
      menu.find(">ul.menu__drop").slideUp(400);
      menuDrop.slideDown(500);
    }
    
  });

});


// ******************** R A N G E ********************

$(document).ready(function(){
  $("#range__roll").slider({
        orientation: "horizontal",
        animate: "slow",
        range: true,
        min: 10,
        max: 1000,
        step: 10,
        values: [190, 800],
        slide: function(event,ui) {
          
          $("#range__min").val( "$" + ui.values[0]);
          $("#range__max").val( "$" + ui.values[1]);   
                 
        }   
               
  }); 
  
  $("#range__min").val("$" + $("#range__roll").slider("values", 0));
  $("#range__max").val("$" + $("#range__roll").slider("values", 1));
  
});