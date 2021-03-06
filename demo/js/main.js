jQuery(document).ready(function($) {
    
  /*
   * Function to act like jQuery accordion but allow multiple expanded columns
   */
  $.fn.togglepanels = function(){
    return this.each(function(){
      $(this)
        .addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
        .find("h2")
        .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
        .hover(function() { 
          $(this).toggleClass("ui-state-hover"); 
        })
        .prepend('<span class="ui-icon ui-icon-triangle-1-e"></span>')
        .click(function() {
          $(this)
            .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
            .find("> .ui-icon")
            .toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s")
            .end()
            .next()
            .slideToggle(250);
            return false;
        })
        .next()
        .addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom")
        .hide();

        // Expand first accordion section on desktop only
        if ($(window).width() > 1024) {
          $("h2:first", this).trigger("click");
        }
    });
  };

  // Activate accordion
  $(".accordion").togglepanels();

  // Initiate Skrollr
  if ($(window).width() > 1025) {
    var s = skrollr.init({
      forceHeight: false
    });
  }

});