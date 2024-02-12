const hoten = document.getElementById('hoten');
const mk = document.getElementById('mk');

const register = () => {
    localStorage.setItem('hoten', hoten.value);
    localStorage.setItem('mk', mk.value);
    alert('Đăng ký thành công');
    hoten.innerHTML = '';
    mk.innerHTML = '';
    window.location.href = 'dangnhap.html';
}

const register_button = document.getElementById('register-button');
register_button.addEventListener('click', register);