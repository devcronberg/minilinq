# Release Notes

Here are the release notes for MiniLinq:

## [v1.0.0] - 2023-08-04

This is the initial release of MiniLinq, a lightweight JavaScript library that mimics some of the most commonly used LINQ methods from .NET. 

This version includes the following methods on all arrays:

- `where`: Filters an array based on a predicate.
- `select`: Projects each element of an array into a new form.
- `sum`: Computes the sum of a sequence of numeric values.
- `distinct`: Returns distinct elements from a sequence by using a specified selector to compare values.
- `orderBy`: Sorts the elements of a sequence in ascending order according to a key.
- `min`: Returns the minimum value in a sequence of values.
- `max`: Returns the maximum value in a sequence of values.
- `take`: Returns a specified number of contiguous elements from the start of a sequence.
- `skip`: Bypasses a specified number of elements in a sequence and then returns the remaining elements.
- `aggregate`: Applies an accumulator function over a sequence.
- `any`: Determines whether any element of a sequence satisfies a condition.
- `all`: Determines whether all elements of a sequence satisfy a condition.
- `groupBy`: Groups the elements of a sequence according to a specified key selector function.
- `first`: Returns the first element of a sequence, or the first element in a sequence that satisfies a specified condition.
- `last`: Returns the last element of a sequence, or the last element in a sequence that satisfies a specified condition.

Please note that this library is intended for educational purposes only and should not be used in a production environment.

## Future Releases

Future releases will include additional LINQ methods, performance improvements, and bug fixes. Please check back for updates.