const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const timePeriod = document.getElementById("time");

const monthlyPayment = document.getElementById("monthlyPayment");
const totalPayment = document.getElementById("totalPayment");
const interestPaid = document.getElementById("interestPaid");
const spinner = document.getElementById("loading");

function calculateResults(e) {
  let totalAmount, totalInterest;

  const principal = parseFloat(amount.value);

  const i = parseFloat(interest.value) / 100 / 12;

  const n = parseFloat(timePeriod.value) * 12;

  const monthly = (i * principal) / (1 - Math.pow(1 + i, -n));

  if (isFinite(monthly)) {
    totalAmount = monthly * n;
    totalInterest = totalAmount - principal;
    displayResults(monthly, totalAmount, totalInterest);
  } else {
    alert("Please check the values entered");
  }
}

const displayResults = (monthly, total, interest) => {
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = total.toFixed(2);
  interestPaid.value = interest.toFixed(2);
};

document.getElementById("calc").addEventListener("click", function (e) {
  e.preventDefault();
  calculateResults();
});
