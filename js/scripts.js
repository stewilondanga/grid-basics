var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$('document').ready(() => {
      var controller = new ScrollMagic.Controller();
      // arrow down
      new ScrollMagic.Scene({
          triggerElement: "#part-1",
          triggerHook: "onLeave",
          duration: "50",
        })
        .setTween("#arrow-down", 1, {
          opacity: 0
        })
        //.addIndicators()
        .addTo(controller);
      // parts
      $('.part').each(function(ind, elem) {
            const thisId = "#" + $(elem).attr('id');
            const nextId = "#" + $(elem).attr('data-next');
            console.log(nextId)
            new ScrollMagic.Scene({
              triggerElement: thisId,
              triggerHook: "onEnter",
              duration: "0",
              reverse: false,
            })
            /*      			.setTween(thisId, 1, {transform: "translateX(0)" })
                  			//.addIndicators()
                  			.addTo(controller);
                  	});
                  });
