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

// 1. 검색 버튼 누르면 #wrap의 max-height 기기의 높이값에 맞게 변경
// + #wrap style에 overflow-y: hidden; 추가 (백그라운드 스크롤 방지)
// + 검색 버튼 누르면 검색창(searchMenu) 오픈
const searchOpen = document.querySelector('#search-area-open'),
    wrap = document.querySelector('#wrap'),
    searchMenu = document.querySelector('.layout-search-area'),
    searchClose = document.querySelector('#search-area-close'),
    searchForm = document.querySelector('.layout-search-form'),
    searchInput = document.querySelector('.inp_search'),
    searchDelete = document.querySelector('.btn_del'),
    searchKw = document.getElementsByName('kw'),
    searchUl = document.querySelector('.layout-search-result-list'),
    searchItem = searchUl.querySelectorAll('.item'),
    searchLink = searchUl.querySelectorAll('.link'),
    searchItemDel = searchUl.querySelectorAll('.btn_del');



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
// 최근 검색어에 데이터 값이 들어갈 수 있도록 js 선언
let search_value = []; //kw value 리스트

for (let i = 0; i < searchItem.length; i++) { //list의 길이만큼 input의 kw의 value 값을 배열로 저장
    // search_value[i] = searchKw[i].value; 
};



// 최근 검색어 누르면 검색 결과 페이지로 이동함



// 장바구니

const list_goods = document.querySelector('.list_goods'),
      li = list_goods.querySelectorAll('li'),
      cartPut_button = list_goods.querySelectorAll('.btn_cart'),
      cart_type3 = document.querySelector('.cart_type3'),
      bg_loading = document.querySelector('.bg_loading'),
      cartPut = document.querySelector('#cartPut'),
      cartPut_name = cartPut.querySelector('.name'),
      cartPut_dc_price = cartPut.querySelector('.dc_price'),
      cartPut_ori_price = cartPut.querySelector('.original_price'),
      cartPut_sum_price = cartPut.querySelector('.num'), //dc_price의 합계
      
      cartPut_point = cartPut.querySelector('.emph'), //null
      cancel = cartPut.querySelector(".txt_type"),
      button_up = cartPut.querySelector(".up"),
	    button_down = cartPut.querySelector(".down"),
	    count = cartPut.querySelector(".inp");


let product_name = [];  //상품명 리스트
let product_price = []; //상품 가격 리스트
let product_value = []; //상품 갯수 바뀔 때 필요한 value값 리스트

  for (i=0; i<li.length; i++){           // 리스트 값에 저장해주는 반복문
    product_name[i] = li[i].querySelector(".name"); //li 상품 이름
    product_price[i] = li[i].querySelector(".price"); // li 상품 가격
    product_value[i] = li[i].querySelector(".value").value; // 상품 갯수 바뀔 때 필요한 value
  }
  
  
  for (var i = 0; i < li.length; i++) {    // 클릭했을 때 그 인덱스 맞는 값을 넣어주는 반복문
    (function(idx) {
        cartPut_button[idx].onclick = function() {
                cart_type3.classList.remove('off');
                bg_loading.classList.add ('loading');
                document.body.classList.add = "fixed_bg";
                cartPut_name.innerHTML = product_name[idx].innerHTML;
                cartPut_dc_price.innerHTML = product_price[idx].innerHTML;
                cartPut_sum_price.innerHTML = product_price[idx].innerHTML;
                cartPut_point.innerHTML =  comma((product_value[idx] * 1)/20)+'원 적립'; 
  
          var k = 1
          button_up.addEventListener('click', function(){   // 수량 올리기 버튼 클릭 함수
            k++;
            count.value = k;
            cartPut_sum_price.innerHTML = comma(product_value[idx] * k);
            cartPut_point.innerHTML =  comma((product_value[idx] * k)/20)+'원 적립';
          
          });
        
          button_down.addEventListener('click', function(){  // 수량 내리기 버튼 클릭 함수
            if (k > 0){
              k--;
              count.value = k;
              cartPut_sum_price.innerHTML = comma(product_value[idx] * k);
              cartPut_point.innerHTML =  comma((product_value[idx] * k)/20)+'원 적립';
            }
          });
        
          cancel.addEventListener('click', function(){   // 취소버튼 클릭시 사라지게 하는 반복문
          
            cart_type3.classList.add('off');
            bg_loading.classList.remove('loading');
            document.body.classList.remove = "fixed_bg";
            count.value = 1;
            k = 1;
          
          });
        
        }
  
    });
  }

function comma(num){          //콤마찍는 함수
	var len, point, str; 
	   
	num = num + "";  //number를 ""와 더해 문자열로 만듦.
	point = num.length % 3 ; //number의 길이를 나눈 후 나머지를 저장. ex) 1000이라는 4글자를 3으로 나눠 나머지 1을 저장.
	len = num.length; //number의 길이 저장
   
	str = num.substring(0, point); 
	// substring() = 문자열 자르기 함수 (시작인덱스, 종료인덱스)
	// * 문자열 = 배열
	while (point < len) { 
		if (str != "") str += ","; 
		str += num.substring(point, point + 3); 
		point += 3; 
	} 
	 
	return str;
 
}



