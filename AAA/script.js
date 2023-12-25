document.addEventListener('DOMContentLoaded', function () {
    // 初始設定
    var fontSize = '16px';
    var fontColor = 'black';
    var photoStyle = '';

    // 按鈕1: 調整字體和顏色
    document.getElementById('btn-font-color').addEventListener('click', function () {
        fontSize = prompt('請輸入新的字體大小（如：16px）');
        fontColor = prompt('請輸入新的字體顏色（如：red）');
        updateStudentInfo();
    });

    // 按鈕2: 調整大頭照樣式
    document.getElementById('btn-photo-style').addEventListener('click', function () {
        photoStyle = 'border-radius: 50%; border: 4px solid red;';
        updateStudentInfo();
    });

    // 按鈕3: 換圖
    document.getElementById('btn-change-photo').addEventListener('click', function () {
        document.getElementById('student-photo').src = 'new_photo.jpg';
    });

    // 更新學生資訊顯示
    function updateStudentInfo() {
        document.getElementById('student-id').style.fontSize = fontSize;
        document.getElementById('student-name').style.fontSize = fontSize;
        document.getElementById('student-id').style.color = fontColor;
        document.getElementById('student-name').style.color = fontColor;
        document.getElementById('student-photo').style.cssText = photoStyle;
    }
});
