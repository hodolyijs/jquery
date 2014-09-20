// 즉시실행 함수로 플러그인 영역을 감싸줌(전역변수 예방)
;(function ($) {
	var defaults = {
		index: 1,
		moveTimeout: null,
		btnFlag: true, // 버튼 활성화 유무
		imgWidth: 0, // 이미지 넓이
		maxImg: 0, // 슬라이더 이미지 갯수
		sliderWith: 0, // 슬라이더 전체 넓이
		breakTime: 2000, // 슬라이더 멈춤 시간
		sliderTime: 600 // 슬라이더 움직이는 시간	
	};

	// jquery 플러그인 작성
	$.fn.shinchonSlider = function (options) {
		
	};
}) (jQuery);
		
		
/*		
		$(function () {
			var index = 1,
				moveTimeout = null,
				slider = $(".sliderMask .slider"),
				btnFlag = true, // 버튼 활성화 유무
				imgWidth = slider.find("img:first").width(), // 이미지 넓이
				maxImg = 0, // 슬라이더 이미지 갯수
				sliderWith = 0, // 슬라이더 전체 넓이
				breakTime = 2000, // 슬라이더 멈춤 시간
				sliderTime = 600; // 슬라이더 움직이는 시간

			// 슬라이더 맨 앞에 마지막 슬라이드를 추가 해준다
			slider.find("li:first").before(slider.find("li:last").clone());
			// 슬라이더 맨 뒤에 처음 슬라이드를 추가 해준다
			slider.append(slider.find("li:eq(1)").clone());

			maxImg = slider.find("img").length; // 슬라이더 이미지 갯수
			sliderWith = imgWidth * maxImg; // 슬라이더 전체 넓이

			slider.css({width: sliderWith, left: -1 * imgWidth});

			$(".controlBox > .thumb a").click(function () {
				index = $(".controlBox > .thumb a").index(this) + 1;

				moveSlider();
			});
			
			// prev, next 버튼 동작 함수
			function sliderBtn() { 
				// btnFlag == false function END!!
				if (!btnFlag) return false;
				btnFlag = false;

				if ($(this).attr("href") == "#left") { // 왼쪽 버튼이면 
					index--; // 인덱스 감소
				} else { // 오른쪽 버튼이면
					index++; // 인덱스 증가
				}
				
				moveSlider(); // 슬라이더 이동
				
				return false;
			}

			// prev, next 버튼 이벤트
			$(".controlBox > a").click(sliderBtn);
			
			// 슬라이더 이동 함수
			function moveSlider() {
				$(".sliderMask .slider").stop().animate({left: -(index * imgWidth)}, sliderTime, function () {
					// 인덱스 값 예외 처리
					// 왼쪽 이동시 예외처리
					if (index  < 1) {
						index = maxImg - 2;
						slider.css("left", -(index * imgWidth));
					}

					// 오른쪽 이동시 예외처리
					if (index >= maxImg - 1) {
						index = 1;
						slider.css("left", -(index * imgWidth));
					}
					
					// 버튼 활성화
					btnFlag = true;
				});
			}	
			
			// 자동 슬라이더를 위해서 선언한 함수
			function run() {
				index++;

				moveSlider();
				
				moveTimeout = setTimeout(run, breakTime);
			}

			moveTimeout = setTimeout(run, breakTime);
			
			$(".sliderWrap").hover(
				function () {
					clearTimeout(moveTimeout);
				},
				function () {
					moveTimeout = setTimeout(run, breakTime);
				}
			);
		});
		*/