const button = document.getElementById('changeColorButton');

button.addEventListener('click', function() {
    // สร้างสีแบบสุ่ม
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});