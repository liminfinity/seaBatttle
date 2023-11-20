function statistic() {
    document.querySelector('.cnt-wins').innerHTML = window.cntWins ?? 0;
    document.querySelector('.cnt-lose').innerHTML = window.cntLose ?? 0;
    document.querySelector('.cnt-surrender').innerHTML = window.cntSurrender ?? 0;
}
document.querySelector('.app-nav__btn.show-stat').addEventListener('click', statistic);