# MiniLinq

MiniLinq is a lightweight JavaScript library that mimics some of the most commonly used LINQ methods from .NET.

**Note: This library is intended for educational purposes only, and should not be used in a production environment.**

## Installation

1. Download the `minilinq.min.js` file from the [artifacts](https://github.com/devcronberg/minilinq/actions/workflows/node.yml) section of the repository (click on ).

2. Include the `minilinq.min.js` file in your HTML file:

    ```html
    <script src="path/to/minilinq.min.js"></script>
    ```

You can also use [the `minilinq.js` file](minilinq.js).


## Usage

Once included in your HTML file, the methods will be available on all arrays. 

Example:

```javascript
let arr = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Charlie", age: 20 },
    { id: 3, name: "Anny", age: 20 },
    { id: 4, name: "Bob", age: 30 },
];

let result = arr.where(x => x.age === 20);
```

## Methods

The following methods are available on all arrays:

### where

Filters an array based on a predicate.

Example:

```javascript
let result = arr.where(x => x.age === 20);
// returns all elements with age 20
```

### select

Projects each element of an array into a new form.

Example:

```javascript
let result = arr.select(x => x.name);
// returns ["Alice", "Charlie", "Anny", "Bob"]
```

### sum

Computes the sum of a sequence of numeric values.

Example:

```javascript
let result = arr.sum(x => x.age);
// returns 90
```

### distinct

Returns distinct elements from a sequence by using a specified selector to compare values.

Example:

```javascript
let result = arr.distinct(x => x.age);
// returns [20, 30]
```

### orderBy

Sorts the elements of a sequence in ascending order according to a key.

Example:

```javascript
let result = arr.orderBy(x => x.name);
// returns elements sorted by name in ascending order
```

### min

Returns the minimum value in a sequence of values.

Example:

```javascript
let result = arr.min(x => x.age);
// returns 20
```

### max

Returns the maximum value in a sequence of values.

Example:

```javascript
let result = arr.max(x => x.age);
// returns 30
```

### take

Returns a specified number of contiguous elements from the start of a sequence.

Example:

```javascript
let result = arr.take(2);
// returns the first 2 elements
```

### skip

Bypasses a specified number of elements in a sequence and then returns the remaining elements.

Example:

```javascript
let result = arr.skip(2);
// returns all elements except the first 2
```

### aggregate

Applies an accumulator function over a sequence.

Example:

```javascript
let result = arr.aggregate((prev, curr) => prev + curr.age, 0);
// returns 90 (the sum of ages)
```

### any

Determines whether any element of a sequence satisfies a condition.

Example:

```javascript
let result = arr.any(x => x.age === 20);
// returns true if any element's age is 20
```

### all

Determines whether all elements of a sequence satisfy a condition.

Example:

```javascript
let result = arr.all(x => x.age >= 20);
// returns true if all elements' age is 20 or more
```

### groupBy

Groups the elements of a sequence according to a specified key selector function.

Example:

```javascript
let result = arr.groupBy(x => x.age);
// returns an object where the key is the age and the value is an array of elements with that age
```

### first

Returns the first element of a sequence, or the first element in a sequence that satisfies a specified condition.

Example:

```javascript
let result = arr.first();
// returns the first element

let resultWithPredicate = arr.first(x => x.age === 20);
// returns the first element with age 20
```

### last

Returns the last element of a sequence, or the last element in a sequence that satisfies a specified condition.

Example:

```javascript
let result = arr.last();
// returns the last element

let resultWithPredicate = arr.last(x => x.age === 20);
// returns the last element with age 20
```

## Tests

Tests are written using Jest. To run the tests, navigate to the project folder in the terminal and execute the following command:

```bash
npm test
```

All tests should pass before the project is built and the minified file is updated.

## Building

To create a minified version of the library, navigate to the project folder in the terminal and execute the following command:

```bash
npm run build
```

This will create or update the `minilinq.min.js` file in the project root.

## License

This project is licensed under the MIT License.
