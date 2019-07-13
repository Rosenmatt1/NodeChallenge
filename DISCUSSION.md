Started with an npm install.

Problem 1:
-run tests (npx jest) and it showed that the test getBagsStillNeeded was failing.  
*After running node volunteers_calculator.js food_shelf_north.txt, it was showing 0 volunteers were needed each day even though the number of goal bags were not being reached, which was an indicator that there was an error in the math.

The bags variable in the getBagsStillNeeded function was substrating goal bags from goal bags, which was creating 0.  Changed the bags variable to subtract goal bags from actual bags.  The getVolunteersNeeded function is now producing the appropriate number of volunteers needed.  

Problem 2:



