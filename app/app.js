// INCORRECT METHOD OF CALCULATING INTEREST MUST FIX

let calculateBtnElement = document.getElementById("calculateBtn");

calculateBtnElement.addEventListener("click", function () {
  let principle = parseFloat(document.getElementById("principleBox").value);
  let rate = parseFloat(document.getElementById("rateBox").value);
  let time = parseFloat(document.getElementById("timeBox").value);

  let rateDecimal = rate / 100;
  let totalInterest = principle * (1 + rateDecimal * time);
  let grandTotal = principle + totalInterest;

  let principleOutput = principle.toFixed(2);
  let totalInterestOutput = totalInterest.toFixed(2);
  let grandTotalOutput = grandTotal.toFixed(2);

  let resultsElement = document.getElementById("results");
  resultsElement.textContent = `With a beginning principle of $${principleOutput} and with a growth rate of ${rate}% for ${time} years, your total interest will be $${totalInterestOutput} with a grand total of $${grandTotalOutput}.`;
});
