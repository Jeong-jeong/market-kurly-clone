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

// 1. 검색 버튼 누르면 #wrap의 max-height 기기의 높이값에 맞게 변경
// + #wrap style에 overflow-y: hidden; 추가 (백그라운드 스크롤 방지)
// + 검색 버튼 누르면 검색창(searchMenu) 오픈
const searchOpen = document.querySelector('#search-area-open'),
    wrap = document.querySelector('#wrap'),
    searchMenu = wrap.querySelector('.layout-search-area'),
    searchClose = wrap.querySelector('#search-area-close'),
    searchForm = document.querySelector('.layout-search-form'),
    searchInput = wrap.querySelector('.inp_search'),
    searchDelete = wrap.querySelector('.btn_del'),
    searchKw = document.getElementsByName('kw'),
    searchUl = document.querySelector('.layout-search-result-list'),
    searchItem = searchUl.querySelectorAll('.item'),
    searchLink = searchUl.querySelectorAll('.link'),
    searchItemDel = searchUl.querySelectorAll('.btn_del');



    searchOpen.addEventListener('click', function() {
        wrap.style.cssText = "padding-top: 133px; overflow-y: hidden";
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
        wrap.style.cssText = "padding-top: 133px;";
    });

// 4. 최근 검색어 하단(layout-search-wrapper __active)에 li height 값이 들어감
// + btn_del를 누르면 해당 li 삭제
// 최근 검색어에 데이터 값이 들어갈 수 있도록 js 선언
let search_value = []; //kw value 리스트

for (let i = 0; i < searchItem.length; i++) { //list의 길이만큼 input의 kw의 value 값을 배열로 저장
    search_value[i] = searchKw[i].value; 
};



// 최근 검색어 누르면 검색 결과 페이지로 이동함



// 6. top_bnr 삭제 버튼 클릭시 위로 업!

// 7. search_mobile.html 만들기