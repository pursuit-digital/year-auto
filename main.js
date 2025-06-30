const todaysDate = new Date();
const dateYearItems = document.querySelectorAll('[pd-year-auto]');

dateYearItems.forEach((item)=>{
    updateYear(item, todaysDate.getFullYear());
});

function updateYear(item, date){
    item.textContent = date;
}