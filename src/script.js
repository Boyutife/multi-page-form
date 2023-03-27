const toggleBill = document.querySelector('.toggle_bill');
month = document.querySelector('.month'),
 year = document.querySelector('.year'),
 arcade = document.querySelector('.arcade'),
 advanced = document.querySelector('.advanced'),
 pro = document.querySelector('.pro');


toggleBill.addEventListener('click',()=>{
    toggleBill.classList.toggle('justify-end');
    year.classList.toggle('text-MarineBlue');
    month.classList.toggle('text-LightGray');
    const monthly = document.querySelectorAll('.monthly');
    monthly.forEach(e =>{
      e.classList.toggle('hidden');
    });
    const yearly = document.querySelectorAll('.yearly');
    yearly.forEach(e =>{
      e.classList.toggle('hidden');
    }) 

});