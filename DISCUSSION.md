Started with an npm install.

Problem 1:
-run tests (npx jest) and it showed that the test getBagsStillNeeded was failing.  
*After running node volunteers_calculator.js food_shelf_north.txt, it was showing 0 volunteers were needed each day even though the number of goal bags were not being reached, which was an indicator that there was an error in the math.

The bags variable in the getBagsStillNeeded function was substrating goal bags from goal bags, which was creating 0.  Changed the bags variable to subtract goal bags from actual bags.  The getVolunteersNeeded function is now producing the appropriate number of volunteers needed.  

Problem 2:
In the getResults function, it was concatconating i:
result =volunteers[i] + " additional volunteers are needed on day " + i
-i represents the index so it was showing day 0,1,2,3,4
-I added new data to the .txt files to have the 4th element be the day of the week and replaces i with this.data[i][3].
*To ensure the function still worked even if a day of the week was not passed in, I added an or statement which looked like:  (this.data[i][3] || i).
*To ensure the test still passed(the test does not have access to the data), I added a ternary which looks like this: (this.data ? this.data[i][3] : i)

Problem #3:
-In the getResults function, added a sort method on the results array but the number of volunteers needed had been concatonated into a string. In the sort method, I sliced off the first 5 characters of the string and converted it into a number, which then allowed the sort method to properly sort the results.  

Problem #4:
-The application was well written with very good variable and function names, which made it easy to jump in, even though I had no previous experience with this style of object oriented programming. The code was well spaced and indented, which made it easy to read. 

*The one change that I would have made is to make the data an array of objects, instead of an array of strings.  An array of objects is best practice.
The object would look somehting like: { bagsNeeded: num, day: string }



