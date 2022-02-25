// One way of Understanding

interface Form<T> {
    formValues: T;
    formErrors: _Error<T>
}

// change all type to boolean

type _Error<T> = {
    [k in keyof T]-?: boolean
}

type Person = {
    name: string;
    age: number
}

const obj2: Person = { name: "sam", age: 40 }

const result: Form<Person> = {
    formValues: obj2,
    formErrors: {
        name: true,
        age: true
    }
}

/**
 * Error: name and age should be boolean
 * 
const result2: Form<Person> = {
    formValues: obj2,
    formErrors: {
        name: "Not Valid",
        age: "Not Valid"
    }
}
 */

