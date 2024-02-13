const radBackground = document.getElementById('radBackground');
const radFontColor = document.getElementById('radFontColor');
const btnChangeColor = document.getElementById('btnChangeColor');
const btnCancel = document.getElementById('btnCancel');
const selectColor = document.getElementById('colors');
const textZone = document.getElementById('textZone');
let color = '';

selectColor.addEventListener('change', function() {
    color = selectColor.value;
    if (selectColor.value === 'none') {
        color = '';
    }
});

btnChangeColor.addEventListener('click', function() {
    if (radBackground.checked) {
        textZone.style.backgroundColor = color;
    } else if (radFontColor.checked) {
        textZone.style.color = color;
    }
});

btnCancel.addEventListener('click', function() {
    textZone.style.backgroundColor = '';
    textZone.style.color = '';
});