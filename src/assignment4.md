# Assignment 4

> Utility Types & Mapped Types

- [Assignment 4](#assignment-4)
  - [Task 1](#task-1)
    - [Deliverables](#deliverables)
  - [Task 2](#task-2)
    - [Background](#background)
    - [Deliverables](#deliverables-1)
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

## Useful links

[typescript-utility-types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
[typescript-mapped-types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
[utility-types](https://github.com/piotrwitek/utility-types)
