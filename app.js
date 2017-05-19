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
  chq = chq - +chqInput.value;
  chqDisplay.innerHTML = 'Balance Amount ' + '$' + chq;
  if (chq < +chqInput.value){
    chq = 0;
    savings = savings - +chqInput.value;
    chqDisplay.innerHTML = 'Balance Amount ' + '$' + chq;
    savDisplay.innerHTML = 'Savings Balance ' + '$' + savings;
    chqInput.style.backgroundColor = "pink";
  }
  if (savings < +chqInput.value && chq === 0){
    savings = 0;
    savDisplay.innerHTML = 'Balance Amount ' + '$' + chq;
    chqInput.style.backgroundColor = "pink";
    chqDisplay.innerHTML = 'Insufficient Funds!'
  }
};
chqWdlBtn.addEventListener('click', chqWdl);
