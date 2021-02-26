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

// top_bnr 삭제 구현
const top_bnr = document.querySelector('#appBanner');
const top_bnr_close = top_bnr.querySelector('#bnrHeaderClose');
const wrapp = document.querySelector('#wrap'); // padding-top: 95;
const header = document.querySelector('#header_purple'); // top: 0
const lnb = document.querySelector('#lnbMenu');
top_bnr_close.addEventListener('click', function() {
	top_bnr.classList.add('move');
	wrap.style.paddingTop = '95px';
	header.classList.add('move');
	lnb.classList.add('move');
});