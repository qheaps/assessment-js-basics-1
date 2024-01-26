///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
totalAcres = 0
// Calculates the total number of acres picked per week across all apple types
// for loop for fuji acres
for (let i = 0; i <= fujiAcres.length - 1; i++) {
    totalAcres = totalAcres + fujiAcres[i]
}
// for loop for gala acres
for (let i = 0; i <= galaAcres.length - 1; i++) {
    totalAcres = totalAcres + galaAcres[i]
}
// for loop for pink acres, how I wish I could use a function
for (let i = 0; i <= pinkAcres.length - 1; i++) {
    totalAcres = totalAcres + pinkAcres[i]
}
console.log(totalAcres, `total acres`)




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// calculates the average number of acres picked per day across all apple types
let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres, `average daily acres`)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
// Calculates how many days(in a whole number) it would take to pick 174 acres of apples at the average daily rate
while (acresLeft >= 0) {
    acresLeft = acresLeft - averageDailyAcres
    days++
}
console.log(days, `days`)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let fujiTons = []
let galaTons = []
let pinkTons = []

// Calculates daily tons for fuji apples
for (let i = 0; i <= fujiAcres.length - 1; i++) {
    fujiTons.push(fujiAcres[i] * 6.5)
}
// console.log(fujiTons)
// Calculates daily tons for gala apples
for (let i = 0; i <= galaAcres.length - 1; i++) {
    galaTons.push(galaAcres[i] * 6.5)
}
// console.log(galaTons)
// Calculates daily tons for pink apples
for (let i = 0; i <= pinkAcres.length - 1; i++) {
    pinkTons.push(pinkAcres[i] * 6.5)
}
// console.log(pinkTons)







// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

// The following for loops calculate the total number of pounds from the number of tons picked daily for each type of apple.
for (let i = 0; i <= fujiTons.length - 1; i++) {
    fujiPounds = fujiPounds + (fujiTons[i] * 2000)
}
console.log(fujiPounds, `fuji pounds`)

for (let i = 0; i <= galaTons.length - 1; i++) {
    galaPounds = galaPounds + (galaTons[i] * 2000)
}
console.log(galaPounds, `gala pounds`)

for (let i = 0; i <= pinkTons.length - 1; i++) {
    pinkPounds = pinkPounds + (pinkTons[i] * 2000)
}
console.log(pinkPounds, `pink pounds`)






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// Calculates the profits for each apple type
let fujiProfit = fujiPounds * fujiPrice
console.log(`total fuji profit: $ ${fujiProfit}.`)
let galaProfit = galaPounds * galaPrice
console.log(`total gala profit: $ ${galaProfit}.`)
let pinkProfit = pinkPounds * pinkPrice
console.log(`total pink profit: $ ${pinkProfit}.`)
// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// Calculates the overall profit from all apple types
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`Total profits were $ ${totalProfit}`)
