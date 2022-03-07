
function tabSetting() {
    $('.tabPage').hide();
    $($('.current').find('a').attr('href')).show();
    // Tab 메뉴 클릭 이벤트 생성
    $('.tab_Menu>li').click(function (event) {
        var tagName = event.target.tagName; // 현재 선택된 태그네임
        var selectedLiTag = (tagName.toString() == 'A') ? $(event.target).parent('.tab_Menu>li') : $(event.target); // A태그일 경우 상위 Li태그 선택, Li태그일 경우 그대로 태그 객체
        var currentLiTag = $('.tab_Menu>li[class~=current]'); // 현재 current 클래그를 가진 탭
        var isCurrent = false;  

        // 현재 클릭된 탭이 current를 가졌는지 확인
        isCurrent = $(selectedLiTag).hasClass('current');

        // current를 가지지 않았을 경우만 실행
        if (!isCurrent) {
            $($(currentLiTag).find('a').attr('href')).hide();
            $(currentLiTag).removeClass('current');

            $(selectedLiTag).addClass('current');
            $($(selectedLiTag).find('a').attr('href')).show();
        }

        return false;
    });
}

$(function () {
    // 탭 초기화 및 설정
    tabSetting();
});
