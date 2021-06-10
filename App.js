const sidebarBtn = document.querySelector('#show');
const sidebar = document.querySelector('.aside');

sidebarBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('show-sidebar');
});