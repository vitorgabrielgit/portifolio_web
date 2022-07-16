// btn start
const btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', () => {
    let obj = document.querySelector('#mainPag');
    let positionY = obj.offsetTop;
    window.scroll({
        top: positionY,
        behavior: "smooth"
    });
})