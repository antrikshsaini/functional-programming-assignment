# Assignment 4

> Utility Types & Mapped Types

- [Assignment 4](#assignment-4)
  - [Task 1](#task-1)
    - [Deliverables](#deliverables)
  - [Task 2](#task-2)
    - [Background](#background)
    - [Deliverables](#deliverables-1)
  - [Task 3](#task-3)
    - [Deliverables](#deliverables-2)
    - [Extensions](#extensions)
  - [Useful links](#useful-links)

## Task 1

> Utility types & mapped types

### Deliverables

1. Implement your own Omit utility type based on MappedTypes, keyof and Exclude
2. Implement your own Pick utility type based on MappedTypes, keyof and Extract
3. Implement your own Partial/Required utility type
4. Given Type X with properties x, y, z, and type Y which extends X with properties s, t and u, show how you can you use the same concepts to automatically build a new type which will include all properties from type Y which are NOT in type X.

## Task 2

> Validation data structure & mapped types

### Background

```typescript
interface Form<T> {
    formValues: T;
    formErrors:...
}
```

### Deliverables

1. Given a `Form<T>` interface with user input fields, map an errors type to collect possible validation errors

## Task 3

> Tree Library

### Deliverables

Create a typescript library for a generic `Tree<A>` algebraic data type

```typescript
// Possible starter
type Tree<A> = Leaf<A> | Branch<A>;

class Leaf<A> {
  tag: "leaf" = "leaf";
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }
}

class Branch<A> {
  tag: "branch" = "branch";
  readonly left: Tree<A>;
  readonly right: Tree<A>;

  constructor(left: Tree<A>, right: Tree<A>) {
    this.left = left;
    this.right = right;
  }
}
```

                          A Tree

                          Branch
                      ┌─────┬─────┐
             ┌────────┼──●  │  ●──┼───────┐
             │        └─────┴─────┘       │
             ↓         left  right        ↓
           Branch                       Branch



1. Implement a `size` function that counts the number of leaves and branches (nodes) in a tree
2. Implement a `max` that returns the maximum value contained in a tree of numbers
3. Implement a `depth` that returns the maximum path length from the root node to any leaf
4. Implement a `map` that applies a function to each element in the tree
5. Implement a `filter` that removes tree nodes based on a condition
6. Implement a `zip` that creates a new tree out of two supplied trees by pairing up equally-positioned items from both trees

### Extensions

- Create success and failure test cases for the methods that operate on your tree
- Publish your tree library to NPM
- Create additional methods (chain,clamp, pluck, fold) (some of these may require you to constrain the generic)

## Useful links

[typescript-utility-types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[typescript-mapped-types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
[utility-types](https://github.com/piotrwitek/utility-types)