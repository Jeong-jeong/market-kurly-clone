'use strict';

const gnb = document.querySelector('.gnb');
const gnbTopOffset = gnb.offsetTop;
window.addEventListener('scroll', e =>{

    // .gnb 상단에 고정
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