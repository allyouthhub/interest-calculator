function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
    alert("Please enter valid positive numbers.");
    return;
  }

  const simpleInterest = (principal * rate * time) / 100;
  const totalAmount = principal + simpleInterest;

  document.getElementById("simpleInterest").innerText = `Simple Interest: ₹${simpleInterest.toFixed(2)}`;
  document.getElementById("totalAmount").innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
}
