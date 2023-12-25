function adjustFont() {
  document.getElementById('student-info').style.fontSize = '20px';
  document.getElementById('student-info').style.color = 'blue';
}

function adjustPhoto() {
  document.getElementById('selfie').style.border = '4px solid red';
  document.getElementById('selfie').style.borderRadius = '50%';
}

function changePhoto() {
  document.getElementById('selfie').src = 'lifephoto.jpg';
}