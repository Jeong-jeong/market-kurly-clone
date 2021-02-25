$(document).ready(function(){


    $('.shortcut_home').click(function(){
        for(i=0;i<$('.menu_shortcut ul li').length;i++){           // li의 갯수만큼 반복해서 on이라는 클래스를 가지고 있는 애를 찾아서 on 삭제
            if($('.menu_shortcut ul li a').hasClass("on") === true){      // 여기서 on은 글자색 보라색으로 해주는 css클래스요소
                $('.menu_shortcut ul li a').removeClass('on');            // 기존에 있던 on은 비활성화 시키고 , 이번에 클릭한 요소에다가 on을 활성화 시키기 위함임
            }
        }
        $('.shortcut_home').addClass('on');
    });

    $('.shortcut_menu').click(function(){
        for(i=0;i<$('.menu_shortcut ul li').length;i++){           // li의 갯수만큼 반복해서 on이라는 클래스를 가지고 있는 애를 찾아서 on 삭제
            if($('.menu_shortcut ul li a').hasClass("on") === true){      // 여기서 on은 글자색 보라색으로 해주는 css클래스요소
                $('.menu_shortcut ul li a').removeClass('on');            // 기존에 있던 on은 비활성화 시키고 , 이번에 클릭한 요소에다가 on을 활성화 시키기 위함임
            }
        }
        $('.shortcut_menu').addClass('on');
    });

    $('.shortcut_mypage').click(function(){
        for(i=0;i<$('.menu_shortcut ul li').length;i++){           // li의 갯수만큼 반복해서 on이라는 클래스를 가지고 있는 애를 찾아서 on 삭제
            if($('.menu_shortcut ul li a').hasClass("on") === true){      // 여기서 on은 글자색 보라색으로 해주는 css클래스요소
                $('.menu_shortcut ul li a').removeClass('on');            // 기존에 있던 on은 비활성화 시키고 , 이번에 클릭한 요소에다가 on을 활성화 시키기 위함임
            }
        }
        $('.shortcut_mypage').addClass('on');
    });





});

// aside 검색창은 공통부분으로 common_mobile.js에 넣었습니다!
// >> 카테고리 html 파일에 <aside id="search-menu" class="layout-search-area"> 이부분 넣어주시면 돼요!

// 1. 검색 버튼 누르면 #wrap의 max-height 기기의 높이값에 맞게 변경
// + #wrap style에 overflow-y: hidden; 추가 (백그라운드 스크롤 방지)
// + 검색 버튼 누르면 검색창(searchMenu) 오픈
const searchOpen = document.querySelector('#search-area-open'),
    wrap = document.querySelector('#wrap'),
    searchMenu = document.querySelector('.layout-search-area'),
    searchClose = document.querySelector('#search-area-close'),
    searchForm = document.querySelector('.layout-search-form'),
    searchWrap = document.querySelector('.layout-search-wrapper '),
    searchInput = document.querySelector('.inp_search'),
    searchDelete = document.querySelector('.btn_del'),
    searchKw = document.getElementsByName('kw'),
    searchUl = document.querySelector('.layout-search-result-list'),
    searchItemDel = searchUl.querySelectorAll('.btn_del');



    // 검색 레이어가 나타나면 배경을 고정시켜 스크롤 되지 않게 함. 
    searchOpen.addEventListener('click', function() {
        wrap.style.cssText = "padding-top: 95px; overflow-y: hidden";
        searchMenu.classList.add('__active');
        searchDelete.classList.add('on');
        
    // 2. input에 값이 있으면 btn_del에 on 클래스 추가, 값이 없을 때 삭제
        searchInput.addEventListener('input', function() {
            if (searchInput.value !== '') {
                searchDelete.classList.add('on');
            };
        }); 
    });

    searchDelete.addEventListener('click', function() {
        searchInput.value = '';
        searchDelete.classList.remove('on');
    });

    // 3. 닫기 버튼 클릭시 검색창(searchMenu) 클로즈
    searchClose.addEventListener('click', function() {
        searchMenu.classList.remove('__active');
        wrap.style.cssText = "padding-top: 95px;";
    });

// 4. 최근 검색어 하단(layout-search-wrapper __active)에 li height 값이 들어감
// + btn_del를 누르면 해당 li 삭제
// 최근 검색어에 키워드가 보이도록 (중복 방지)
// 최근 검색어 누르면 검색 결과 페이지로 이동함 (location.href 속성 사용)

let search_value = []; //input의 kw value 리스트
let search_link_value = []; //list에 kw value를 옮길 곳

for (let i = 0; i < searchKw.length; i ++) { //리스트 값에 저장
    search_value[i] = searchInput.value;
}

for (let i = 0; i < searchKw.length; i++) { //list의 길이만큼 input의 kw의 value 값을 배열로 저장
    // search_value[i] = searchKw[i].value; 
    searchForm.addEventListener('submit', function() {
        if (searchKw.value !== null) {
            let template = document.querySelector('#search-early-item-template'); //template 태그 가져옴
            let copy = template.content.cloneNode(true); //자식요소까지 포함해 복사
            searchUl.appendChild(copy); // ul 밑에다 붙임
        };
        
    });
}







