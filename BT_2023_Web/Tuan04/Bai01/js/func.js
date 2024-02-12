let mssv = prompt("Nhập MSSV: ");
let hoten = prompt("Nhập họ tên: ");
let lop = prompt("Nhập lớp: ");

const table = document.getElementById("students_table");
const row = table.insertRow(-1);
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
cell1.innerHTML = mssv;
cell2.innerHTML = hoten;
cell3.innerHTML = lop;