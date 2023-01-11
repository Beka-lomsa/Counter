const numberFace = document.querySelector('#numberFace');
const threeBtn = document.querySelectorAll('.button');
let count = 0

    threeBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const selectedBtn = e.currentTarget.classList

            if(selectedBtn.contains('increase')){
                count++
                numberFace.textContent = count
            }
            if(selectedBtn.contains('decrease')){
                count--
                numberFace.textContent = count
            }
            if(selectedBtn.contains('reset')){
                count = 0
                numberFace.textContent = count
            }

             if(count < 0){
                numberFace.style.color = "rgb(60, 60, 60)"
            }else if(count > 0){
                numberFace.style.color = "rgb(30, 30, 30)"
            }else {
                numberFace.style.color = "rgb(55, 55, 55)"
            }

        })
    })












