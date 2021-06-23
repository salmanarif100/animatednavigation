const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

// toggle.addEventListener('click', () => nav.classList.toggle('active'));

//line 4 and line 7 code are both same...
toggle.addEventListener('click', () => { 
    nav.classList.toggle('active')
});