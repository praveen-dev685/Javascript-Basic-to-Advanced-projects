let month = document.getElementById("month");
let day = document.getElementById("day");
let week = document.getElementById("week");
let finish = document.getElementById("finish");
let submit = document.getElementById("calculate");

submit.addEventListener("click", () => {
  let amount = document.getElementById("amount").value;
  let paisa = document.getElementById("percentage").value;

  if (amount == "" && paisa == "") {
    alert("Please Fill the Form !!");
  } 
  else {
    let monthCalculation = (amount / 100) * paisa;
    month.innerText = monthCalculation.toFixed(2);
    day.innerText = Math.round(monthCalculation / 30).toFixed(2);
    week.innerText = Math.round(monthCalculation / 7).toFixed(2);
    finish.innerText = amount / monthCalculation.toFixed(2);
  }
});
