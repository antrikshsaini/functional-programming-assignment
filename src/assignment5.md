# Assignment 5

> Functional reactive programming in typescript

- [Assignment 5](#assignment-5)
  - [Background](#background)
  - [Task](#task)
  - [Possible Starters](#possible-starters)
  - [Useful links](#useful-links)
  - [Extensions](#extensions)

## Background

- `getEmailCount` and `notifyEmailCount`
- callback/listener/(pub/sub)/reactive!
- user input can be modeled as a "stream"

## Task

1. Using typescript, create a command-line application with user input
2. Write it as a loop
3. Write is as a stream + reducer using rxjs/node stream/other library for file input/streams
4. Model your application according to the principles of FRP/unidirectional data flow
   - init,update,view

## Possible Starters

> Is this color orange?!

```bash
Enter a hex code:
$ #FFFF
$ this color is not orange!
Enter a hex code:
```

Feel free to use this [reactive-cli](https://github.com/vivid-theory/reactive-cli) template to bootstrap your project

## Useful links

[elm-architecture](https://guide.elm-lang.org/architecture/)
[unidirectional-user-interface-architectures](https://staltz.com/unidirectional-user-interface-architectures.html)
[rxjs](https://rxjs.dev/guide/overview)
[typescript-cli-programming-intro](https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89)

## Extensions

- Use rxjs as your stream implementation
- What would this program look like in React? Elm?
- What elements of FRP are identifiable in the HeyAuto codebase?
- To what degree can partial function application and or function composition be employed in this app?