const hoten = document.getElementById('hoten');
const mk = document.getElementById('mk');
const login_button = document.getElementById('login-button');

const login = () => {
    const hoten = localStorage.getItem('hoten');
    const mk = localStorage.getItem('mk');
    const hotenInput = document.getElementById('hoten').value;
    const mkInput = document.getElementById('mk').value;
    if (hoten === hotenInput && mk === mkInput) {
        alert('Đăng nhập thành công');
    } else {
        alert('Đăng nhập thất bại');
    }
}

login_button.addEventListener('click', login);