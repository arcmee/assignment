<template>
  <div id="wrap">
      <!-- @ CONTAINER -->
      <section id="container" class="sub  new">
          <!-- @ CONTENTS -->
        <div id="contents">
              <!-- @ SUB TITLE AREA -->
        <div class="sub-title-area">
            <h2 class="tit">News & Info </h2>
        </div>
        <div class="btn_area">
          <a href="write.html" class="btn_blue_line">글쓰기</a>
        </div>
        <!-- 페이징 처리는 5개씩 해주세요-->
          <table class="news_list">
              <caption>News 리스트</caption>
              <colgroup>
                  <col style="width: 10%">
                  <col style="width:*">
                  <col style="width: 10%">
                  <col style="width: 10%">
                  <col style="width: 5%">
                  <col style="width: 8%">
              </colgroup>
            <thead>
              <tr>
                  <th scope="col">번호</th>
                  <th scope="col">제목</th>
                  <th scope="col">작성자</th>
                  <th scope="col">등록일</th>
                  <th scope="col">조회</th>
                  <th scope="col">첨부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>10</td>
                  <td class="board_txt">
                      <p>
                          <a href="#" class="ellip"> [필독]사이트 리뉴얼 오픈 및 서비스 일시 중지 안내 </a>
                      </p>
                  </td>
                  <td class="board_man">관리자</td>
                  <td class="board_date">2016-02-25</td>
                  <td class="board_read">989</td>
                  <td class="board_file"><span class="file_icon">파일다운로드</span></td>
              </tr>
              <tr>
                  <td>9</td>
                  <td class="board_txt">
                      <p>
                          <a href="view.html" class="ellip">사이트 개편에 따른 이용약관 및 개인정보 취급방침 변경 안내</a>
                      </p>
                  </td>
                  <td class="board_man">관리자</td>
                  <td class="board_date">2016-02-25</td>
                  <td class="board_read">989</td>
                  <td class="board_file"><span class="file_icon">파일다운로드</span></td>
              </tr>
            </tbody>
        <tr>
                  <td>8</td>
                  <td class="board_txt">
                      <p>
                          <a href="view.html" class="ellip">사이트 개편에 따른 이용약관 및 개인정보 취급방침 변경 안내</a>
                      </p>
                  </td>
                  <td class="board_man">관리자</td>
                  <td class="board_date">2016-02-25</td>
                  <td class="board_read">989</td>
                  <td class="board_file"><span class="file_icon">파일다운로드</span></td>
              </tr>
        <tr>
                  <td>7</td>
                  <td class="board_txt">
                      <p>
                          <a href="#" class="ellip">사이트 개편에 따른 이용약관 및 개인정보 취급방침 변경 안내</a>
                      </p>
                  </td>
                  <td class="board_man">관리자</td>
                  <td class="board_date">2016-02-25</td>
                  <td class="board_read">989</td>
                  <td class="board_file"><span class="file_icon">파일다운로드</span></td>
              </tr>
        <tr>
                  <td>6</td>
                  <td class="board_txt">
                      <p>
                          <a href="#" class="ellip">사이트 개편에 따른 이용약관 및 개인정보 취급방침 변경 안내</a>
                      </p>
                  </td>
                  <td class="board_man">관리자</td>
                  <td class="board_date">2016-02-25</td>
                  <td class="board_read">989</td>
                  <td class="board_file"><span class="file_icon">파일다운로드</span></td>
              </tr>
              </table>
              <div class="pagination">
                  <a class="prev end">첫 페이지</a>
                  <a class="prev">이전 페이지</a>
                  <a href="#" class="on">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">99</a>
                  <a href="#" class="next">다음 페이지</a>
                  <a href="#" class="next end">마지막 페이지</a>
              </div>
              <div class="find_wrap">
                  <select name="" id="">
                      <option value="">제목</option>
                      <option value="">내용</option>
                  </select>
                  <input type="text" name="" id=""  title="검색어 입력" placeholder="검색어 입력">
                  <a href="#" class="btn_gray">검색</a>
              </div>
          </div>
          <!-- CONTENTS @ -->
      </section>
      <!-- CONTAINER @ -->
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
