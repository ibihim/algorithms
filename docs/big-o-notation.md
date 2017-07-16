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

## Examples

How many calculations can a Big-O make during an hour, when PC does calcs 3,600,000,000 per hour.

| Big-O | Values |
| ----- | ------ |
| 1 | infinity |
| log N | infinity |
| N | 3,600,0000,000 |
| N^2 | 60,000 |
| 2^N | 32 |
| N! | 13 |

