const toggleBill = document.querySelector('.toggle_bill');

toggleBill.addEventListener('click', () => {
  toggleBill.classList.toggle('justify-end');
  const year = document.querySelector('.year');
  year.classList.toggle('text-MarineBlue');
  const month = document.querySelector('.month');
  month.classList.toggle('text-LightGray'); 
  const monthly = document.querySelectorAll('.monthly');
  monthly.forEach(e => {
    e.classList.toggle('hidden');
  });
  const yearly = document.querySelectorAll('.yearly');
  yearly.forEach(e => {
    e.classList.toggle('hidden');
  });
  const selectPlan = document.querySelector('.selectplanref');
  if(toggleBill.classList.contains('justify-end')){
     selectPlan.href = 'pickaddonsyr.html';
     console.log(selectPlan.href);
  }
     
});


