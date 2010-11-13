(function() {
  if (!Prototype.Browser.IE)
    return;

  var gcf = document.createElement('script'), interval;
  gcf.type = 'text/javascript'; gcf.async = true;
  gcf.src = document.location.protocol + '//ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gcf);
  
  interval = setInterval(function() {
    if (window.CFInstall !== undefined) {
      CFInstall.check({
        mode: "overlay"
      });
      $$('.chromeFrameOverlayUnderlay').first().setOpacity('0.7').setStyle({backgroundColor: '#fff', height: $$('body').first().getHeight() + 'px'});
      $('chromeFrameOverlayContent').setStyle({left: ((document.viewport.getWidth() - $('chromeFrameOverlayContent').getWidth()) / 2)+ 'px'});
      $('chromeFrameCloseButton').observe('click', function(event) {
        event.stop();
        $('chromeFrameOverlayContent').remove();
        $$('.chromeFrameOverlayUnderlay').first().remove();
      })
      clearInterval(interval);
    }
  }, 10);
})();