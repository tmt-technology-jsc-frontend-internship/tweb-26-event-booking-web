
let innerSelectBox = document.querySelector('.inner-select-box');
let selectedValue = document.querySelector('#selectedValue');
let arrowDown = innerSelectBox.querySelector('.arrow');
let optionList = document.querySelector('.option-list');
let options = optionList.querySelectorAll('.option');


innerSelectBox.addEventListener('click', ()=>{
    console.log(22222)
    arrowDown.classList.toggle('rotate-180')
    if(!optionList.style.maxHeight) {
        let tmp = optionList.scrollHeight;
        if(tmp > 188) tmp = 188;
        optionList.style.maxHeight = tmp + 'px';
    }
    else{
        optionList.style.maxHeight = null;
    }
})

options.forEach(option =>{
    option.addEventListener('click', ()=>{
        selectedValue.innerHTML = option.innerHTML;
        arrowDown.classList.remove('rotate-180')
        optionList.style.maxHeight = null;
    })
})

document.body.onclick = (e)=>{
    console.log(e.target)
    if(e.target !== innerSelectBox && e.target !== selectedValue && e.target !== arrowDown){
        arrowDown.classList.remove('rotate-180')
        optionList.style.maxHeight = null;
    }
}