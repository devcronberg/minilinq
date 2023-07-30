Array.prototype.where = function (predicate) {
    return [...this].filter(predicate);
};

Array.prototype.select = function (projection) {
    return [...this].map(projection);
};

Array.prototype.distinct = function (selector) {
    const set = new Set([...this].map(selector));
    return Array.from(set);
};

Array.prototype.orderBy = function (selector) {
    return [...this].sort((a, b) => {
        const aValue = selector(a);
        const bValue = selector(b);

        if (aValue > bValue) {
            return 1;
        } else if (aValue < bValue) {
            return -1;
        } else {
            return 0;
        }
    });
};

Array.prototype.sum = function (predicate) {
    return [...this].reduce(
        (prev, curr) => prev + (predicate ? predicate(curr) : curr),
        0
    );
};

Array.prototype.min = function (predicate) {
    return Math.min(...[...this].map(predicate ? predicate : (item) => item));
};

Array.prototype.max = function (predicate) {
    return Math.max(...[...this].map(predicate ? predicate : (item) => item));
};

Array.prototype.take = function (count) {
    return [...this].slice(0, count);
};

Array.prototype.skip = function (count) {
    return [...this].slice(count);
};

Array.prototype.aggregate = function (callback, initialValue) {
    return [...this].reduce(callback, initialValue);
};

Array.prototype.any = function (predicate) {
    return [...this].some(predicate);
};

Array.prototype.all = function (predicate) {
    return [...this].every(predicate);
};

Array.prototype.groupBy = function (keySelector) {
    return [...this].reduce((groups, item) => {
        const key = keySelector(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
};

Array.prototype.first = function (predicate) {
    return predicate ? [...this].find(predicate) : [...this][0];
};

Array.prototype.last = function (predicate) {
    if (predicate) {
        for (let i = [...this].length - 1; i >= 0; i--) {
            if (predicate([...this][i])) {
                return [...this][i];
            }
        }
    } else {
        return [...this][[...this].length - 1];
    }
    return undefined;
};

// let t = [1, 2, 3, 4].last();
// console.log(t);

// let arr = [
//     { id: 1, name: "Alice", age: 20 },
//     { id: 2, name: "Charlie", age: 20 },
//     { id: 3, name: "Anny", age: 20 },
//     { id: 4, name: "Bob", age: 30 },
// ];
// console.log(arr.last().id);
