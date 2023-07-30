require("./minilinq");
/* global test, expect */

let arr = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Charlie", age: 20 },
    { id: 3, name: "Anny", age: 20 },
    { id: 4, name: "Bob", age: 30 },
];

test("where method filters array based on condition", () => {
    const result = arr.where((x) => x.age === 20);
    expect(result.length).toBe(3);
});

test("select method projects each element of array", () => {
    const result = arr.select((x) => x.name);
    expect(result).toEqual(["Alice", "Charlie", "Anny", "Bob"]);
});

test("count method counts total elements if no condition", () => {
    const result = arr.count();
    expect(result).toBe(4);
});

test("count method counts elements that satisfy condition", () => {
    const result = arr.count((x) => x.age === 20);
    expect(result).toBe(3);
});

test("distinct method returns distinct elements", () => {
    const result = arr.distinct((x) => x.age);
    expect(result).toEqual([20, 30]);
});

test("orderBy method sorts array", () => {
    const result = arr.orderBy((x) => x.name);
    expect(result[0].name).toBe("Alice");
});

test("min method returns minimum value", () => {
    const result = arr.min((x) => x.age);
    expect(result).toBe(20);
});

test("max method returns maximum value", () => {
    const result = arr.max((x) => x.age);
    expect(result).toBe(30);
});

test("take method returns first n elements", () => {
    const result = arr.take(2);
    expect(result.length).toBe(2);
});

test("skip method skips first n elements", () => {
    const result = arr.skip(2);
    expect(result.length).toBe(2);
});

test("aggregate method applies an accumulator function", () => {
    const result = arr.aggregate((prev, curr) => prev + curr.age, 0);
    expect(result).toBe(90);
});

test("any method returns true if any elements satisfy condition", () => {
    const result = arr.any((x) => x.age === 20);
    expect(result).toBe(true);
});

test("all method returns true if all elements satisfy condition", () => {
    const result = arr.all((x) => x.age >= 20);
    expect(result).toBe(true);
});

test("groupBy method groups elements", () => {
    const result = arr.groupBy((x) => x.age);
    expect(Object.keys(result).length).toBe(2);
});

test("first method returns first element", () => {
    const result = arr.first();
    expect(result.id).toBe(1);
});

test("last method returns last element", () => {
    console.log(arr);
    const result = arr.last();
    expect(result.id).toBe(4);
});

test("first method returns first element that satisfies the condition", () => {
    const result = arr.first((obj) => obj.age === 20);
    expect(result.id).toBe(1);
});

test("last method returns last element that satisfies the condition", () => {
    const result = arr.last((obj) => obj.age === 20);
    expect(result.id).toBe(3);
});

test("sum method sums up the elements of the array (with numbers)", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.sum();
    expect(result).toBe(15);
});

test("sum method sums up the elements of the array (with objects)", () => {
    const result = arr.sum((obj) => obj.age);
    expect(result).toBe(90);
});

test("min method returns the smallest element in the array (with numbers)", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.min();
    expect(result).toBe(1);
});

test("min method returns the smallest element in the array (with objects)", () => {
    const result = arr.min((obj) => obj.age);
    expect(result).toBe(20);
});

test("max method returns the largest element in the array (with numbers)", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.max();
    expect(result).toBe(5);
});

test("max method returns the largest element in the array (with objects)", () => {
    const result = arr.max((obj) => obj.age);
    expect(result).toBe(30);
});

test("sum method calculates sum with no selector", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.sum();
    expect(result).toBe(15);
});

test("min method returns minimum value with no selector", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.min();
    expect(result).toBe(1);
});

test("max method returns maximum value with no selector", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.max();
    expect(result).toBe(5);
});

test("any method returns false if no elements satisfy condition", () => {
    const result = arr.any((x) => x.age === 10);
    expect(result).toBe(false);
});

test("all method returns false if not all elements satisfy condition", () => {
    const result = arr.all((x) => x.age === 20);
    expect(result).toBe(false);
});

test("groupBy method groups elements correctly", () => {
    const result = arr.groupBy((x) => x.age);
    expect(result[20].length).toBe(3);
    expect(result[30].length).toBe(1);
});

test("first method returns undefined if no elements satisfy the condition", () => {
    const result = arr.first((obj) => obj.age === 10);
    expect(result).toBeUndefined();
});

test("last method returns undefined if no elements satisfy the condition", () => {
    const result = arr.last((obj) => obj.age === 10);
    expect(result).toBeUndefined();
});

test("count method counts the number of elements", () => {
    const result = arr.count();
    expect(result).toBe(4);
});

test("count method counts the number of elements that satisfy the condition", () => {
    const result = arr.count((obj) => obj.age === 20);
    expect(result).toBe(3);
});

test("single method returns the single element that satisfies the condition", () => {
    const result = arr.single((obj) => obj.id === 1);
    expect(result.id).toBe(1);
});

test("single method throws error when more than one element satisfy the condition", () => {
    expect(() => {
        arr.single((obj) => obj.age === 20);
    }).toThrow(Error);
});

test("single method throws error when no elements satisfy the condition", () => {
    expect(() => {
        arr.single((obj) => obj.age === 10);
    }).toThrow(Error);
});

test("orderByDescending method sorts array in descending order", () => {
    const result = arr.orderByDescending((x) => x.name);
    expect(result[0].name).toBe("Charlie");
    expect(result[3].name).toBe("Alice");
});

test("contains method returns true if the array contains the value", () => {
    const result = arr.contains(
        { id: 1, name: "Alice", age: 20 },
        (a, b) => a.id === b.id
    );
    expect(result).toBe(true);
});

test("contains method returns false if the array does not contain the value", () => {
    const result = arr.contains(
        { id: 5, name: "Eve", age: 20 },
        (a, b) => a.id === b.id
    );
    expect(result).toBe(false);
});

test("min method calculates min for array of integers with no selector", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.min();
    expect(result).toBe(1);
});

test("max method calculates max for array of integers with no selector", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.max();
    expect(result).toBe(5);
});

test("sum method calculates sum for array of integers with no selector", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.sum();
    expect(result).toBe(15);
});
