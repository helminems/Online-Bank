console.log('GA Online Bank');

var savings = 5000;
var chq = 2000;
var savDisplay = document.querySelector('.savDisplay');
var chqDisplay = document.querySelector('.chqDisplay');
var savDepBtn = document.querySelector('.sav-dep-btn');
var savWdlBtn = document.querySelector('.sav-wdl-btn');
var chqDepBtn = document.querySelector('.chq-dep-btn');
var chqWdlBtn = document.querySelector('.chq-wdl-btn');
var totalBalance = savings + chq;

savDisplay.innerHTML = 'Balance Amount ' + '$ ' + savings;
chqDisplay.innerHTML = 'Balance Amount ' + '$ ' + chq;

// Deposit button for Savings Account
var savDep = function() {
  var savInput = document.querySelector('.savInput');
  savings += +savInput.value;
  savDisplay.innerHTML = 'Balance Amount ' + '$' + savings;
  if (savings > 0){
    savDisplay.innerHTML = 'Balance Amount ' + '$' + savings;
    savInput.style.backgroundColor = "white";
  }
};
savDepBtn.addEventListener('click', savDep);

// Withdrawal button for Savings Account
var savWdl = function() {
  var savInput = document.querySelector('.savInput');
  savings = savings - +savInput.value;
  savDisplay.innerHTML = 'Balance Amount ' + '$' + savings;
  if (savings <= 0){
    savings = 0;
    // savDisplay.innerHTML = 'Balance Amount ' + '$' + savings;
    savDisplay.innerHTML = 'Insufficient Funds!'
    savInput.style.backgroundColor = "pink";
  }
};
savWdlBtn.addEventListener('click', savWdl);

var chqDep = function() {
  var chqInput = document.querySelector('.chqInput');
  chq += +chqInput.value;
  chqDisplay.innerHTML = 'Balance Amount ' + '$' + chq;
  if (chq > 0){
    chqDisplay.innerHTML = 'Balance Amount ' + '$' + chq;
    chqInput.style.backgroundColor = "white";
  }
};
chqDepBtn.addEventListener('click', chqDep);

var chqWdl = function() {
  var chqInput = document.querySelector('.chqInput');
  var savInput = document.querySelector('.savInput');
  savings;
  totalBalance;
  chq = chq - +chqInput.value;
  totalBalance = savings + chq;
  if (chq <= 0) {
    chq = 0;
    savings = (totalBalance - chqInput.value) + +chqInput.value;
    console.log(chq);
    console.log(totalBalance);
    console.log(savings);
    chqDisplay.innerHTML = 'Insufficient Funds!';
    chqInput.style.backgroundColor = "pink";
  }
  chqDisplay.innerHTML = 'Balance Amount ' + '$' + chq;
  savDisplay.innerHTML = 'Balance Amount ' + '$' + savings;
  if (savings <= 0 && chq === 0) {
    savings = 0;
    chqDisplay.innerHTML = 'Insufficient Funds!';
    savDisplay.innerHTML = 'Insufficient Funds!';
    chqInput.style.backgroundColor = "pink";
    savInput.style.backgroundColor = "pink";
  }
};
chqWdlBtn.addEventListener('click', chqWdl);
