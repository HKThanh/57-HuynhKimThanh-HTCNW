const cksTN = document.getElementById('trungnguyen');
const cksMK = document.getElementById('mekong');
const cksNL = document.getElementById('newlife');
const cksOB = document.getElementById('oceanblue');
const cksBS = document.getElementById('bluespace');
const cksWin = document.getElementById('windows');

//xuất chuỗi checkbox đã được check
function getChecked() {
    let checked = '';
    if (cksTN.checked) {
        checked += cksTN.value + ', ';
    }
    if (cksMK.checked) {
        checked += cksMK.value + ', ';
    }
    if (cksNL.checked) {
        checked += cksNL.value + ', ';
    }
    if (cksOB.checked) {
        checked += cksOB.value + ', ';
    }
    if (cksBS.checked) {
        checked += cksBS.value + ', ';
    }
    if (cksWin.checked) {
        checked += cksWin.value + ', ';
    }
    return checked;
}

//xuất chuỗi checkbox đã được check
function showChecked() {
    document.getElementById('results').innerHTML = getChecked();
}

const btnResult = document.getElementById('btnResults');
btnResult.addEventListener('click', showChecked);