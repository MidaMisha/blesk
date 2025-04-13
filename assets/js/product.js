let price = document.getElementsByClassName("price")[0]
let count = document.getElementsByClassName("count")[0]
let countEl = 1;

document.getElementsByClassName("minus")[0].addEventListener('click', ()=>{
    countEl= countEl -1;
    count.innerHTML = countEl
})
document.getElementsByClassName("plus")[0].addEventListener('click', ()=>{
    countEl= countEl +1;
    count.innerHTML = countEl

})


let imgElCar = document.getElementsByClassName('imgElCar')
let mainIMG = document.getElementsByClassName('mainIMG')[0]

for(let i = 0; i < imgElCar.length; i++){
    imgElCar[i].addEventListener('click', function(){
        console.log(this.src)
        mainIMG.src = this.src
})}

document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function() {
        // Закрываем все другие панели
        document.querySelectorAll('.panel').forEach(panel => {
            if (panel !== this.nextElementSibling) {
                panel.classList.remove('active');
                panel.previousElementSibling.querySelector('.arrow').textContent = '▼';
            }
        });
        
        // Переключаем текущую панель
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.classList.toggle('active');
        
        const arrow = this.querySelector('.arrow');
        arrow.textContent = panel.classList.contains('active') ? '▲' : '▼';
    });
});