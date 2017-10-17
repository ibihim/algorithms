# Algorithms Repository

This repository is used to have an overview about algorithms.

## Common Runtime Function

### 1

An algorithm with O(1) performance takes a constant amount of time no matter how
big the problem is. E.g. picking a value from a hash map.

### Log N

An algorithm with O(log N) performance typically divides the number of items it 
must consider by a fixed fraction every step. E.g. searching in binary tree (?)

### Sqrt N

Some algorithms have O(sqrt(n)) performance, but they're not common.

### N

Scales with growth

### N log N

Efficient sorting algorithms.

### N^2

Loops over each element and for each element it loops again. Still solvable.

### 2^N

Optimal selection of inputs aka Knapsack problem. Given a set of objects that
each has a weight and a value. You have a knapsack that can hold a certain
amount of weight. Items of different weight. The challenge is to select the
items with the greatest total value that fit the knapsack.

### N!

Optimal arrangement of inputs. E.g. traveling salesman problem (TSP).


## Big-O-Notation Runtime comparison

### 1

Constant amount of time.

###  Log N

Typically divides the number of items it must consider by a fixed fraction at every step.

E.g. Searching inside a sorted binary tree.

### N

Simply scales with amount of values given.

### Math.pow(N, 2)

E.g. a double for-loop

### Math.pow(2, N)

Grows extremly quickly. Better to use heuristics.

E.g. Knapsack problem. Fixed amount of weight. Add items to it with the most value in sum.

### N!

Grows even quicker.

E.g. traveling salesman problem (TSP). Network of cities, travel all with minimum of cost.

### Examples

How many calculations can a Big-O make during an hour, when PC does calcs 3,600,000,000 per hour.

| Big-O | Values |
| ----- | ------ |
| 1 | infinity |
| log N | infinity |
| N | 3,600,0000,000 |
| N^2 | 60,000 |
| 2^N | 32 |
| N! | 13 |

