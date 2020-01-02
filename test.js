/**
 * Bonus Test: 50 Marks total
 * 
 * Please answer 1 question from each section.
 * 
 * Each section is worth 10 Marks.
 */

/**
 * Section 1: Variables (10 marks)
 * 
 * Answer only 1 of the questions in section 1.
 */

/**
 * a. Create an array called weather.  Create 7 objects one for each day of the week.
 * Each object should contain a value for weekday and a value for temperature.
 * Push each object into the array.  Console.log the result
 */



/**
 * b. Create an object with an example of each of the following data types.
 * -a string
 * -a number
 * -a boolean
 * -an array
 * -a function
 */

/**
  * Section 2: functions (10 marks)
  * 
  * Answer only 1 of the questions in section 2
  */

/**
 * a.  The function below is a function expression.  Transform it into a curried function.
 */

let buildHouse = function(roofType, numWindows, hasBasement, widthOfLand, lengthOfLand){
    return {roofType, numWindows, hasBasement, widthOfLand, lengthOfLand};
}

/**
 * b.  Build a pure function, that takes in at least 3 strings.
 *      Each string should be a fact about a pure function
 *      Return an array of facts about what makes up a pure function
 */

/**
 * Section 3: Classes
 * 
 * Answer only 1 of the questions in section 3.
 */

/**
 * a. Create a class called Vacation: (10 marks)
 *      Your constructor should take in and store:
 *      -a destination(a string)
 *      -a number of travellers(an integer)
 *      -a method of travel(a string)
 *     
 *      Add a method to your class called shareDetails.
 *      -the function should console log the details of the vacation
 * 
 *      Create an instance of vacation, passing in all variables.
 *      -call shareDetails on the instance you made
 */

/**
 * b.  Create a class called Athelete
 *      Your constructor should take in and store:
 *      -The name of your athelete(make a up a name)
 *      -A number of milliseconds(integer between 300 and 1000)
 *      -A victory phrase
 * 
 *      Make a function called runner to start an interval.  The interval 
 *      should run at the set number of milliseconds passed into your constructor.
 *      Each time the interval runs, call Math.random().  If the number
 *      returned is higher than .80, console log the victory phrase and
 *      end the interval.
 * 
 *      Create an instance of Athelete, and call the runner function on it.
 * 
 */

/**
 * Section 4: DOM Manipulation(10 marks)
 * 
 * Answer only 1 of the questions in section 4.
 */

/** 
 * a. Use querySelector to select the body of the html.  Using DOM Manipulation:
 *      -create an h1 with the title "Important News Story"
 *      -update the font size to 2em
 *      -create a class in style.css called breakingNews that:
 *          -changes the text colour to Red
 *          -adds an underline to the title 
*/

/**
 * b.  Use querySelector to select the body of the html.  Using DOM Manipulation and forEach:
 *      -add a p tag for each entry in the people array, and display the info in the following 
 *          format
 *          -firstName lastName: Age
 */
let people = [
    {firstName: "Stan", lastName: "Smith", age: 19},
    {firstName: "Bruce", lastName: "Lee", age: 22},
    {firstName: "Gary", lastName: "Newton", age: 17},
    {firstName: "Ingrid", lastName: "Bergmann", age: 24}
]

/**
 * Section 5: Scope Binding and Data(10 marks)
 * 
 * Answer only 1 of the questions in section 5.
 */

/**
 * a.  Take the array of people from section 4 and tansform it into JSON.  
 *     -Save it as the contents of data.json
 *     -Use fetch to load the data, convert the data, then console log it
 */

/**
 * b.  Take 2 of the entries from the people array in section 4 and store them
 *     as their own variables.  Using Bind, attach the greeting function to each 
 *     object, then run greeting for each of the two entries.
 */

function greeting(){
    console.log(`I would like to thank ${this.firstName} ${this.lastName} for everything!`);
}


