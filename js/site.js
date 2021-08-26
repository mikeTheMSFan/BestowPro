//Get Loan Amount, Term in months, and interest rate from user
function getValues() {
  let loanAmount = document.getElementById('loanAmount').value;
  let monTerm = document.getElementById('term').value;
  let interestRate = document.getElementById('interestRate').value;

  //Validate that the input is a number
  if (parseInt(loanAmount) && parseInt(monTerm) && parseInt(interestRate)) {
    loanAmount = parseInt(loanAmount);
    monTerm = parseInt(monTerm);
    interestRate = parseInt(interestRate);
    calculatePayments(loanAmount, monTerm, interestRate);
  } else {
    alert('Please check your input and make sure you have only used numbers.');
  }
}

//Calculate Monthly Payment, Principal, Interest, and cost
function calculatePayments(loan, monTerm, interest) {
  //Intrest converted to percentage
  interest = interest / 100;

  //Rate computed from interest
  rate = interest / 12;

  //Add one to rate
  let rateCoEfficient = rate + 1;
  let rateProduct = rate + 1;

  //Raise to the power of the monthly Payments
  rateCoEfficient = Math.pow(rateCoEfficient, monTerm);
  rateProduct = Math.pow(rateProduct, monTerm);

  //Simplify...
  const smallCalc =
    Math.round(((rate * rateCoEfficient) / (rateProduct - 1)) * 1000000) /
    1000000;

  //Multiply by the loan
  monthly = loan * smallCalc;

  //Fill object with calculated values for display
  const loanInfo = {};
  for (let i = 0; i <= monTerm; i++) {
    loanInfo.month = i;
    loanInfo.balance = loan - loanInfo.principal;
    loanInfo.interest = interest / 1200;
    loanInfo.principal = monthly - loanInfo.interest;
  }
}

//Display Result
