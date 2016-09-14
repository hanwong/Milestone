# Milestone 

### 초기 세팅
* `pages.ejs` - 섹션 별 id, class 이름 수정
* `gnb_nav.ejs`, `side_nav.ejs` - 링크 주소 `pages.ejs`의 id로 수정
* `_pages.sass`, `_carousel.sass`, `_filter_list.sass` - `page0$` 관련 선택자 수정
* `nav.js` 
  * `page_names` 정의 후 `gnb_scene`, `side_scene` 의 `triggerElement`와 `duartion`의 선택 설정 변경
  * `scroll_scene`의 `triggerElement`를 첫번째 페이지의 선택자로 변경
* `helper.js` - `views` 변수의 선택자 설정 변경

> 설정후 페이지 간 순서 변경이 있을 경우 `page_names` 와 관련된 설정들의 순서도 모두 변경해주어야 함.

### UI 개선 부분
  * md 뷰의 토글 메뉴에서 메뉴 선택시 닫히지 않도록 수정
    * 메뉴를 보면서 지속적으로 탐색에 용이하게 하기 위하여 닫히지 않게 함
    * xs 뷰의 경우 모바일 버전이기 때문에 많은 영역을 차지하는 메뉴영역이 닫히는 것이 맞으므로 변경하지 않음

  * features 페이지 xs 뷰
    * description 행폭?

    