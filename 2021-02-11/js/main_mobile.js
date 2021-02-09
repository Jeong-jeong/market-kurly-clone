const mobile_goTop = () => {
	// Scroll | button show/hide
	window.addEventListener('scroll', () => {
	  if (document.querySelector('html, body').scrollTop > 1000) {
		document.getElementById('m-go-top').style.opacity = "1";
	  } else {
		document.getElementById('m-go-top').style.opacity = "0";
	  }
	});
	// back to top
	document.getElementById('m-go-top').addEventListener('click', () => {
	  window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	  });
	})
  };
  mobile_goTop();