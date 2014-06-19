/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

// function sum(a, b){
// 	var sum = a + b;
// 	return sum
// 		+ " ("
// 		+ a
// 		+ "+"
// 		+ b
// 		+ ")";
// }

var sum = function(a, b){
	var sum = a + b;
	return sum
		+ " ("
		+ a
		+ "+"
		+ b
		+ ")";
}

console.log(sum(8, 11));

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var matt = {
	finishingTime1: 240, //in minutes
	finishingTime2: 210.4,
	finishingTime3: 235.1,
	finishingTime4: 208.9,
	finishingTime5: 197.5
};

var keya = {
	finishingTime1: 120, //in minutes
	finishingTime2: 110.4,
	finishingTime3: 135.1,
	finishingTime4: 108.9,
	finishingTime5: 97.5
};

var getSum = function(p){
	var f = "finishingTime";
	return p[f+1] + p[f+2] + p[f+3] + p[f+4] + p[f+5];
}

var getAverageTime = function(person){
	return getSum(person) / 5;
}

console.log( getAverageTime(matt) );
console.log( getAverageTime(keya) );


/**
 * PART 3
 *
 *
 * Modify our in-class JavaScript program to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
	checking: 0,
	savings: 0,
	retirement: 0
};

var RobertosBankAccount = {
	checking: 0,
	savings: 0,
	retirement: 0
};

function addToBank(account, savings, retirement, checking){
   account.savings = account.savings + savings;
   account.retirement = account.retirement + retirement;
   account.checking = account.checking + checking;
}

function getSumOfAccounts(account){
	var sum = account.savings + account.checking + account.retirement;
	return sum;
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);

// console.log(account.savings); --> ERROR: account does not exist

var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos);