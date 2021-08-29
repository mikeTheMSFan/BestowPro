function validiateFields() {
  //Loan Error Message
  const loanError = document.getElementById('loanError');
  //term Error Message
  const termError = document.getElementById('termError');
  //IR Error Message
  const IRError = document.getElementById('IRError');
  //loan field
  const loanAmountField = document.getElementById('loanAmount').value;
  //term field
  const term = document.getElementById('term').value;
  //IR Field
  const interestRate = document.getElementById('interestRate').value;

  //Helper function that returns boolean based on RegEx Pattern(Just Digits).
  function isWholeNumber(str) {
    const isNum = /^\d+$/.test(str);
    return isNum;
  }

  //Helper function that returns boolean based on RegEx Pattern(Whole and Decimal numbers).
  function isFloat(str) {
    const isFloat = /^\d*(\.\d+)?$/.test(str);
    return isFloat;
  }

  //Helper function that checks field for errors
  function checkForError(bool, element, field) {
    if (bool) {
      element.classList.remove('d-block');
      return true;
    } else if (field === '') {
      element.classList.remove('d-block');
    } else {
      element.classList.add('d-block');
      return false;
    }
  }

  //Checks all three feilds and makes sure they are in the correct format.
  const loanOK = checkForError(
    isWholeNumber(loanAmountField),
    loanError,
    loanAmountField
  );
  const termOK = checkForError(isWholeNumber(term), termError, term);
  const IRateOk = checkForError(isFloat(interestRate), IRError, interestRate);

  if (loanOK && termOK && IRateOk) {
    getValues();
  }
}
