// https://blog.hyungsub.com/entry/display-none%EC%97%90-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0


// 버튼: btn btn_cart2
// cart_option cartList cart_type1
// bg_loading
//  > opacity: 0 >> 1로
// 취소 누르면 opaciity 0, and display none;

// 오류: querySelector의 경우 문서 내 1번째 요소만 반환. 

const btnCart2 = document.getElementsByClassName('btn_cart2'); // length = li 만든 숫자만큼
const cancel = document.getElementsByClassName('btn_type2'); // length = 1
const bg = document.getElementsByClassName('bg_loading'); // length = 1
const cartType1 = document.getElementsByClassName('cart_type1'); // length = 1




for (let i = 0; i < btnCart2.length; i++) {
	btnCart2[i].addEventListener('click', function() {
		cartType1[i].classList.add ('show');
		bg[i].classList.add ('show');
		// cartType1[i].classList.remove('hide');
		// bg[i].classList.remove('hide');
	});
}

for (let i = 0; i < cancel.length; i++) {
	cancel[i].addEventListener('click', function() {
		if (cartType1[i].classList.contains('show')) {
			cartType1[i].classList.remove('show');
			bg[i].classList.remove('show');
		} else {
			cartType1[i].classList.add ('hide');
			bg[i].classList.add ('hide');
		}
	});
}









