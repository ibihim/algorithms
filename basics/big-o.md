# Big O Notation

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
