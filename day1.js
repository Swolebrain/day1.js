1) Can you restate the conditional more simply?
if ( (isMichaelPhelps || isMerman) && (isMichaelPhelps || hasGills) )
  winGoldMedals();

if (isMichaelPhelps||(isMerman && hasGills))
	winGoldMedals();


//2) Can you restate the conditional to use only
//one negation?
if (!rich && !happy)
    killSelf()
else
    liveOn();

if (!(rich||happy))
	killSelf()
else
	liveOn();


//3) Can you restate the condition to use two negations
//and be more legible?
if (!(urgent && important))
    usePostOfice();
else
    useFedex();

if (!urgent || !important)
	usePostOfice();
else
        useFedex();


//4) Under which circumstances will doSomething run?
if (x > 5 && x <= -5)
    doSomething();
this condition is a contradiction so it will never run


//4b) Under which circumstances will doSomething run?
if (x > 5 || x <= -5)
    doSomething();
either condition will run as long as they are true. if x is given value
-4 to 5, then both conditions will be false and neither will run


//5) Can you restate the conditional to use no negations?
if ( !(x > 10 && y < 15))
    alert("You got it!");
else
    prompt("What you need?");

if ((x <= 10) || (y >= 15))
	alert("You got it!");
else
	prompt("What you need?");


//6) Can you restate the conditional to use only one negation?
if ( !(x < 10) || y <= 10 || z <= 25 || !dead ) {
    console.log("You know your DeMorgan's Laws");
}

if ( !(x >= 10 && y <= 10 && z <= 25 && dead )) {
    console.log("You know your DeMorgan's Laws");

//7) Can you distribute the negation across the expression in parens?
if (!(!alive || distance > 1000 || trapped || enemies < 0)) {
    alert("game goes on");
}

if (alive && distance <= 1000 && !trapped && enemies >= 0 {
    alert("game goes on");
}

//8) Can you distribute the negation across the expression in parens?
if (!(dead && level < 99 && world == "Earth")) {
    alert ("Life goes on");
}

if (!dead || !(level < 99) || !(world == "Earth")){
    alert ("Life goes on");

//9) Generate a random number between 0 and 1 in Javascript
Math.random();


//10) Generate a random number between 0 and 10 in Javascript
Math.random()*10;


//11) Generate a random integer between 0 and 10 (inclusive)
Math.floor(Math.random()*11);


//12) Generate a random number between 5 and 10
Math.random()*5 + 5;


//12b) Generate a random integer between 5 and 10
Math.floor(Math.random()*6) + 5;


//13) Generate a random integer between -10 and 30
Math.floor(Math.random()*41) - 10;



//14) Write a coin flip function. It should return the string "heads" half
//the time and the string "butts" the other half
function coinFlip(a){
    var a = (Math.random() < .5);
    if (a) { return 'heads'
    }
    else {
    return 'butts'
    }
};

// 15) Write a card picking function that outputs
// cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts',
// '10 of Diamonds', '8 of Spades'
// There are 4 suits: Hearts, Diamonds, Clubs, Spades
// There are 13 cards for each suit: Ace, 2-10, Jack, King, Queen

// steps:
// generate a random number between 1-4 for suit
// set the value of a string variable depending on that 1-4 number
// generate a random number between 1-13 for the card's number
// put the number and the suit string together and return it
function pickCard(){
    var suit = Math.round(Math.random()*4);
    if (suit === 0) suit = "Hearts";
    else if (suit === 1) suit = "Diamonds";
    else if (suit === 2) suit = "Clubs";
    else suit = "Spades";

    //your code here
	var num = Math.floor(Math.random()*13) +1;
	if (num == 1) {return "Ace of " + suit}
	if (num == 11) {return "Jack of " + suit}
	if (num == 12) {return "Queen of " + suit}
	if (num == 13) {return "King of " + suit}
    	return num + " of " + suit;
};
//to test pickCard();


//16) In programming, what is the opposite of black? !black

//17) In programming, what is the opposite of x > y ? x <= y

//18) Given an array of numbers, add up all the elements
var a = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];
var sum = 0;
for (var i = 0; i < a.length; i++){
sum = sum + a[i]
};


//19) Write a function has1337s which takes an array and
//returns true if the array contains the number 1337
function has1337s(arr){
  for (var i =0; i <arr.length; i++){
    if (arr[i] == 1337) {
	return true;
    }
   }
   return false;
};
//to test has1337s([0, 1, 2, 1337]);

for (var i = 0; i < arr.length; i++)???
/*20) Write a function that receives an array and another parameter.
It will return true if one of the elements of the array is
equal to the other param. It should return false otherwise */
function containsThing(arr, theThing){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === theThing){
		return true;
		}
 	}
return false;
};
//to test containsThing([2, 3, "ttyrtyrytre", 64], 3);

/* 21) Write a function that receives an array and another parameter.
It will return true if NONE of the elements of the array is
equal to the other param. It should return false otherwise */
function doesntContain(arr, theThing){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === theThing) {
		return false
		}
	}
return true;
};
//to test doesntContain([2, 3, "ttyrtyrytre", 64], 4);

/* 22) Write a function that receives an array of numbers and returns
the average of those numbers*/
function getAvg(arr){
var sum = 0;
	for(var i = 0; i < arr.length; i++){
	sum = sum + arr[i];
}
var avg = sum/arr.length;
return avg;
};
// to test getAvg([10, 10, 9, 9]);

// 23) Write a function which draws a star triangle based
//on an input number
// starz(2) =
// **
// *
//starz(4) =
// ****
// ***
// **
// *

function starz(n){
	for(var line = n; line > 0; line--){
	var starLine = "";
	for(var i = 0; i < line; i++){
	starLine += "*";
	}
	console.log(starLine);
	}
};


/* 24) Write a function which receives a parameter n and returns the
sum of its half plus half of that, plus half of that, until You
reach a number lower than 2.
n = 100, result = 50+25+12.5+6.25+3.125+1.5625
n = 64, result = 32+16+8+4+2+1
*/

function sumHalves(n){
    if (n < 2) return 0;
    return n/2 + sumHalves(n/2);
};
// to test sumHalves(100);
