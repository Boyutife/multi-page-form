const toggleBill = document.querySelector('.toggle_bill');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

toggleBill.addEventListener('click',()=>{
    toggleBill.classList.toggle('justify-end');
    year.classList.toggle('text-MarineBlue');
    month.classList.toggle('text-LightGray')

});