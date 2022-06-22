window.addEventListener('DOMContentLoaded', function() {
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 60,
  framesCount = 30;

  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      let scroller = setInterval(function() {
        let scrollBy = coordY / framesCount;
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    });
  });
});

// mobile-scroll

(() => {
	const MOBILE_WIDTH = 665;
	
	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}
	
	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}
	
	  const href = link.getAttribute('data-scroll-target');

	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;
	
	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	}
	
	document.querySelectorAll('.js-scroll-link').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();
	
	      scrollToContent(this, true);
	  });
	});
})();

