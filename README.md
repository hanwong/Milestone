# 초기 세팅 방법

### 1. 페이지 이름 수정
* `pages.ejs` - 섹션 별 id, class 이름 수정
* `gnb_nav.ejs`, `side_nav.ejs` - 링크 주소 `pages.ejs`의 id로 수정
* `_pages.sass`, `_carousel.sass`, `_filter_list.sass` - `page0$` 관련 선택자 수정
* `nav.js` 
  * `page_names` 정의 후 `gnb_scene`, `side_scene` 의 `triggerElement`와 `duartion`의 선택 설정 변경
  * `scroll_scene`의 `triggerElement`를 첫번째 페이지의 선택자로 변경
* `helper.js` - `views` 변수의 선택자 설정 변경

> 설정후 페이지 간 순서 변경이 있을 경우 `page_names` 와 관련된 설정들의 순서도 모두 변경해주어야 함.


