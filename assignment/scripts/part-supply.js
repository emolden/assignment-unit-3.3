console.log('****** Part Supply *******');
// ***** REQUIRED FEATURES *********************************************
// For each question, be sure to use console.log statements to ensure that
// your code does what you expect!

// 1. Create a variable called 'partsNeeded' with a value of the number 40.
console.log('1. Create partsNeeded:');
let partsNeeded = 40;
console.log('parts needed', partsNeeded);

// 2. Create a variable called 'supplyChanges' whose value is an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11.
console.log('2. Create supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log (`supply changes ${supplyChanges}`);

// 3. Create a variable called 'secondItem' and assign it the value of the second
//    item in the 'supplyChanges' array.
console.log('3. Access the second value of supplyChanges:');
let secondItem = supplyChanges[1];
console.log ('second item', secondItem);

// 4. The last value in the 'supplyChanges' array was added by mistake.
//    Remove it from the array and store it inside a new variable called 'removedItem'.
console.log('4. Remove the last value from supplyChanges:');
let removedItem = supplyChanges[supplyChanges.length - 1];
supplyChanges.pop(); //removes last item of array
console.log('supply changes without 11', supplyChanges);
console.log('removed item', removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Add the value 25 into supplyChanges.');
supplyChanges.push(25); //adds item to end of array
console.log('supply changes with 25', supplyChanges);

// 6. Create three new variables named 'positives', 'negatives', and
//    'zeroes' whose values are empty arrays. Then, write a for loop
//    that loops through the 'supplyChanges' array. For each iteration of
//    the loop:
//      - If the value is a positive number, push it into the 'positives' array.
//      - If the value is a negative number, push it into the 'negatives' array.
//      - If the value is a zero, push it into the 'zeroes' array.
console.log('6. Looping through supplyChanges to populate arrays with positive, negative, and zero values:');
let positives = [];
let negatives = [];
let zeroes = [];
 for (let i=0; i < supplyChanges.length; i++ ){ //creates a new variable i starting at 0; the loop goes as long as i is less than the length of the array; i increases by one each loop
  if (supplyChanges[i] > 0){ //checks to see if each item in the array is greater than 0
    positives.push(supplyChanges[i]); //adds the item to the positive array if it is greater than zero
  }
  else if (supplyChanges[i] < 0) { //checks to see if each item in the array is less than zero
    negatives.push(supplyChanges[i]); //adds the item to the negative array if it is less than zero
  }
  else {
    zeroes.push(supplyChanges[i]); // adds all remaining items (zeros) to zeroes array
  }
 }

 console.log('positives', positives);
 console.log('negatives', negatives);
 console.log('zeroes', zeroes);



// ***** STRETCH GOALS *********************************************
// 7. Rewrite the 'for' loop from #6 as a 'for...of' loop. Instead of 'positives',
//    'negatives', and 'zeroes', create three new arrays named 'stretchPositives',
//    'stretchNegatives', and 'stretchZeroes'. 
console.log('7. Looping through supplyChanges to populate more arrays with positive, negative, and zero values:');
let stretchPositives = [];
let stretchNegatives = [];
let stretchZeroes = [];
for (supply of supplyChanges ){
  if (supply > 0){
    stretchPositives.push(supply);
  }
  else if (supply < 0) {
    stretchNegatives.push(supply);
  }
  else {
    stretchZeroes.push(supply);
  }
 }
console.log('stretch positives', stretchPositives);
 console.log('stretch negatives', stretchNegatives);
 console.log('stretch zeroes', stretchZeroes);

// 8. Create a variable called 'totalParts' and assign it a value of 0.
//    Then, write a loop that adds each value of the 'supplyChanges'
//    array to the 'totalParts' variable.
console.log('8. Looping through supplyChanges to calculate the sum:');
let totalParts = 0;
for (part of supplyChanges) { //create a new variable part that is equal to each item in supplyChanges array in each loop
  totalParts += part; //add the value of each part, from supplyChanges array, to the totalParts on each loop
}

console.log('total parts', totalParts);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. There are 572
//    parts in total, and each box holds 7 parts.
//    Create two variables:
//      1. 'parts': Set its value to 572
//      2. 'boxesFilled': Set its value to 0
//    Use a 'while' loop to keep adding parts to boxes UNTIL
//    no more boxes can be filled. When the loop is finished,
//    the value of 'parts' should reflect how many parts are
//    "left over," and the value of 'boxesFilled' should reflect
//    how many boxes were filled.
console.log('9. Filling boxes with a "while" loop');
let parts = 572;
let fillingBox = 0;
let boxesFilled = 0;
while (parts > 0){ //keep the loop going as long as parts are greater than zero
  parts --; //decrease the amount of parts by one each loop
  fillingBox ++; //increase the amount of fillingBox by one each loop
  if (fillingBox === 7){ //if filling box is equal to 7(parts)
  boxesFilled ++; //increase boxesFilled by one
  fillingBox = 0; // and set fillingBox back to 0
} // else to nothing
}
parts = fillingBox //set parts equal to the number left in the last fillingBox that aren't enough to increase boxesFilled
console.log('parts left over', parts);
console.log('boxes filled', boxesFilled);


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
    supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
  }
} catch (e) {
  // Do nothing
}
