# Nam Puzzle
### [`Play here`][link2] 


Few weeks ago I read an article in [`The Guardian`][link1] titled Nam Puzzle, at first it looked like Sudoku but its an algebraic equation twisted like a snake. Objective of this puzzle is simple, there are nine empty cells, fill the empty cells with numbers from 1 to 9 and no number can repeat itself. 

![Nam Puzzle](https://github.com/tkmallik/tkmallik.github.io/blob/master/img/nam_puzzle_original.png)

It took some time and silly 3rd grade mistakes to figure out the equation and was not patient enough to solve the problem by hand, `itertools. permutations` in Python did the trick. There are 2672 solutions to that puzzle 

``` python 

import itertools

  
def nam_solver(nums):
	if (nums[0] + (13*nums[1]/nums[2]) + nums[3] + 12*nums[4] - nums[5] - 11 + (nums[6]*nums[7]/nums[8]) - 10 == 66):
		print nums
	
if __name__ == '__main__':
	for nums in itertools.permutations(xrange(1,10), 9):
		nam_solver(nums)
		
```

I was really obsessed with the puzzle wanted to build the game as-is in pure Javascript. 

#### Designing the board 

This is first step, drew 6 by 7 grid in PowerPoint and labeled each cell as per the image provided by the Guardian. Managed to create a dynamic html table at runtime by calling `document.createElement`. Later labeled each cell, took care of css, applied color to separate the usercells, operator and static numbers  

![Nam Board](https://github.com/tkmallik/tkmallik.github.io/blob/master/img/nam_puzzle_board.jpg)

#### Designing user cell
Now that I had an actual board game the next step is accepting user input.For this, created a dynamic form with single input type text inside each of nine user cells. Developed regex to accept single digit between 1 through 9 and validated user input `onkeypress`

![Nam Puzzle Render](https://github.com/tkmallik/tkmallik.github.io/blob/master/img/nam_puzzle.png)

#### Checking solution
To check solution with user inputs converted user inputs to an array and compared it with this  `[1,2,3,4,5,6,7,8,9]`, This check helped to figure if any user cell is empty or if user repeated the input twice. The final equation is straight forward as shown below
`nums[0] + (13*nums[1]/nums[2]) + nums[3] + 12*nums[4] - nums[5] - 11 + (nums[6]*nums[7]/nums[8]) - 10 == 66`

imgs validation

#### Hosting 
I did not realize we can host static website on Amazon-S3, created folder, copied all files and made them public, viola site's live! [`Play here`][link2] 


It took four weeks to develop (on/off) and its very close to one published in the article. It was fun to develop it.

[link1]: http://www.theguardian.com/science/alexs-adventures-in-numberland/2015/may/20/can-you-do-the-maths-puzzle-for-vietnamese-eight-year-olds-that-has-stumped-parents-and-teachers
[link2]: http://nampuzzle.s3-website-us-west-1.amazonaws.com/
