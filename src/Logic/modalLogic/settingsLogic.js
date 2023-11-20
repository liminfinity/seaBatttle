

function changeColorShip() {
    document.querySelector('#color-ships').addEventListener('input', (e) => {
        document.querySelectorAll('.ship').forEach(target => target.style.background = e.target.value)
        window.colorShip = e.target.value;
        
    })
}
function changeColorSHurt() {
    document.querySelector('#color-hurts').addEventListener('input', (e) => {
        document.querySelectorAll('.shot-wounded').forEach(target => target.style.background = e.target.value)
        window.colorHurt = e.target.value;
    })
}
function changeColorShot() {
    document.querySelector('#color-shot').addEventListener('input', (e) => {
        document.querySelectorAll('.shot-missed').forEach(target => target.style.color = e.target.value)
        window.colorShot = e.target.value;
    })
}
changeColorShip()
changeColorSHurt()
changeColorShot()
