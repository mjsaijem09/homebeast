jQuery(($) => {

    const $sidebarBtnActive = $(".side-bar-btn");
    const $chatbox = $(".chatbox");
    const $open = $(".open-chatbox");
    const $minimize = $(".minimize-chatbox");
    const $maximize = $(".maximize-chatbox");
    const $close = $(".close-chatbox");
    const $chatboxTextarea = $("textarea");
  
    $open.on("click", function(c) {
      c.stopPropagation();
      $chatbox.removeClass("hide-chatbox");
    });

    $minimize.on("click", function(o) {
      o.stopPropagation();
      $chatbox.toggleClass("minimize");
    });

    let maximized = false;
    $maximize.on("click", function(e) {
      e.stopPropagation();
      $chatbox.toggleClass("maximize");
      maximized = !maximized
        $chatboxTextarea.attr("rows", maximized ? 6 : null);
    });

    $close.on("click", function(i) {
      i.stopPropagation();
      $chatbox.addClass("hide-chatbox");
    });

  });