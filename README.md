# About this Project

This project contains several text files, a single Javascript library file, and a single unit test file.  The code, unit test, and data files will be the focus of this coding exercise.

# Volunteers Needed!

A local food shelf needs more volunteers to help bag rice. The food shelf has multiple locations where people volunteer on the same days each week.

At the end of every week, each location submits a report showing how many volunteers they had and how many bags of rice were produced each day. But they're not always reaching their goals, and some people are going hungry!

They need to know how many more volunteers to recruit each week, so we wrote a program to calculate this for them. But it's not working correctly.

Here is an example location report:
  <table border=1 cellpadding=5 style="font-family: monospace; width:50%">
    <tr>
      <th>Volunteers</th>
      <th>Goal Bags</th>
      <th>Actual Bags</th>
    </tr>
    <tr>
      <td>10</td>
      <td>50</td>
      <td>30</td>
    </tr>
    <tr>
      <td>15</td>
      <td>45</td>
      <td>44</td>
    </tr>
    <tr>
      <td>20</td>
      <td>55</td>
      <td>40</td>
    </tr>
    <tr>
      <td>22</td>
      <td>14</td>
      <td>14</td>
    </tr>
  </table>

Based on this report file the extra volunteers needed per day are calculated as follows:

  * Bags Still Needed = Goal Bags - Actual Bags
  * Bags Stocked Per Volunteer = Actual Bags / Volunteers
  * Volunteers Needed = Bags Still Needed / Bags Stocked Per Volunteer

## Input

There are two `food_shelf_*.txt` files in this project.  The contents are described as follows:
 * The first line of the input is a single line containing comma-separated headers (volunteers, goal bags, actual bags)
 * The next **N** lines each contain comma-separated data for a day of the week.

## Output

For each test case, the script should output **N-1** lines. Each line should contain the volunteers needed for each day of the week in the food shelf input file, one per line.

## Before you begin

(Take Home only) Please note there is a DISCUSSION.md file included in this project. You are encouraged to add discussion points to this file as you progress as if you were pairing with another engineer. Examples could include steps you took to solve the problem or alternative possibilities that you considered and why you chose not to use them.

This project was last tested with `node v10.16.0 LTS` and `yarn v1.16.0`. Other versions may work successfully but we recommend matching those versions for consistency. `docker run` commands are 
provided below if you wish to use a Docker container as an isolated environment.

Note: Windows users using Docker may need to replace `${PWD}` with `%cd%` for each command.

With an appropriate environment set up, install the dependencies:

    yarn install
    
or

    docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app node:10-alpine yarn install

## Running the Program

    node volunteers_calculator.js food_shelf_north.txt

or     
    
    docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app node:10-alpine node volunteers_calculator.js food_shelf_north.txt

## Running the Tests

    yarn jest

or     
    
    docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app node:10-alpine yarn jest

# Problems
## Problem #1

There's a bug in our code and a unit test is failing. Run the tests to identify the problem, then fix the code so the unit tests pass and the program works correctly again.

## Problem #2

Locations would like to include the day of the week with their reports, so it's clear what day each row applies to.
Update the code so that it can handle day names in the `.txt` report files and include them in the results. Make sure the existing report format (without day of the week) is still supported.

## Problem #3

Sort the results in descending order, based on volunteers needed.

## Problem #4

How would you refactor this program to improve it? Implement a few of your ideas.
