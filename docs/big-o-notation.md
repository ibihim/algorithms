# Big-O-Notation Runtime comparison

## 1

Constant amount of time.

##  Log N

Typically divides the number of items it must consider by a fixed fraction at every step.

E.g. Searching inside a sorted binary tree.

## N

Simply scales with amount of values given.

## Math.pow(N, 2)

E.g. a double for-loop

## Math.pow(2, N)

Grows extremly quickly. Better to use heuristics.

E.g. Knapsack problem. Fixed amount of weight. Add items to it with the most value in sum.

## N!

Grows even quicker.

E.g. traveling salesman problem (TSP). Network of cities, travel all with minimum of cost.


