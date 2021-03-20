$(function(){

    $("section").SnapScroll();
  
});


$("section").SnapScroll({

    // Fires events
    events:true,                    
    
    // Fires when snap point element when snapped
    eventChangeActive:"snapscroll_change-active",   
    
    // Fires when snap point element is within the window
    eventChangeVisible:"snapscroll_change-visible",  
  
});