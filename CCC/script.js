$(document).ready(function() {
    // 初始設定
    var fontSize = '16px';
    var fontColor = 'black';
    var photoStyle = '';

    // 按鈕1: 調整字體和顏色
    $('#btn-font-color').click(function() {
        fontSize = prompt('請輸入新的字體大小（如：16px）');
        fontColor = prompt('請輸入新的字體顏色（如：red）');
        updateStudentInfo();
    });

    // 按鈕2: 調整大頭照樣式
    $('#btn-photo-style').click(function() {
        photoStyle = 'border-radius: 50%; border: 4px solid red;';
        updateStudentInfo();
    });

    // 按鈕3: 換圖
    $('#btn-change-photo').click(function() {
        $('#student-photo').attr('src', 'new_photo.jpg');
    });

    // 按鈕4: 動畫切換
    $('#btn-animate').click(function() {
        $('#student-photo').fadeOut(1000, function() {
            $('#student-photo').attr('src', 'another_photo.jpg').fadeIn(1000);
        });
    });

    // 更新學生資訊顯示
    function updateStudentInfo() {
        $('#student-id').css({
            'font-size': fontSize,
            'color': fontColor
        });

        $('#student-name').css({
            'font-size': fontSize,
            'color': fontColor
        });

        $('#student-photo').attr('style', photoStyle);
    }
});