'use strict';


// 로그인 시 top_event, sign_menu .login 추가



// gnb 상단 고정 구현
const gnb = document.querySelector('.gnb');
const gnbTopOffset = gnb.offsetTop;
window.addEventListener('scroll', e =>{

    if (window.pageYOffset >= gnbTopOffset) {
        gnb.style.position = 'fixed';
        gnb.style.top = 0;
        gnb.style.left = 0;
        gnb.style.right = 0;
    } else {
        gnb.style.position = '';
        gnb.style.top = '';
    }
});
// gnb 상단 고정 끝 --