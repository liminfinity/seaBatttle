function openModal(btn, modal) {

    btn.addEventListener('click', (e) => {
        for (let modWin of document.querySelectorAll('.opened')) {
            modWin.classList.remove('opened')
        }
        modal.classList.add('opened')
        e.stopPropagation();
        
    })
}
document.querySelector('.app').addEventListener('click', (e) => {
    if (e.target.closest('.modal')) {
        return false;
    }
    for (let modWin of document.querySelectorAll('.opened')) {
        modWin.classList.remove('opened')
    }
})
openModal(document.querySelector('.app-nav__btn.settings'), document.querySelector('.modal.settings'))
openModal(document.querySelector('.app-nav__btn.show-stat'), document.querySelector('.modal.statistic'))
openModal(document.querySelector('.app-main__btn.manually-arrange'), document.querySelector('.modal.ships'))