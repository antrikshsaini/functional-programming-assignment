```ts
type Empty = { __tag: "empty" };
const empty: Empty = { __tag: "empty" };
const isEmpty = <T>(l: List<T>): l is Empty => {
  return l.__tag == "empty";
};
type Item<T> = { __tag: "item"; val: T; next: List<T> };
const item = <T>(val: T, next: List<T> = empty): Item<T> => {
  return { __tag: "item", val, next };
};
const isItem = <T>(l: List<T>): l is Empty => {
  return l.__tag == "item";
};
type List<T> = Empty | Item<T>;

let n1: List<number> = empty;
let n2: List<number> = item(1);
let n3: List<number> = item(2, item(3));

const tail = <T>(l: List<T>): T | undefined => {
  if (isEmpty(l)) {
    return undefined;
  }
  if (isEmpty(l.next)) return l.val;
  return tail(l.next);
};
const head = <T>(l: List<T>): T | undefined => (isEmpty(l) ? undefined : l.val);

const len = <T>(l: List<T>): number => {
  if (isEmpty(l)) return 0;
  return 1 + len(l.next);
};

const drop = <T>(l: List<T>, n: number): List<T> => {
  if (n <= 0 || isEmpty(l)) return l;
  return drop(l.next, n - 1);
};

const append = <T>(l: List<T>, t: T): List<T> => {
  if (isEmpty(l)) return item(t);
  else if (isEmpty(l.next)) {
    return { ...l, next: item(t) };
  } else return append(l.next, t);
};

const _filter = <T>(f: (t: T) => boolean, l: List<T>): List<T> => {
  if (isEmpty(l)) return l;
  if (f(l.val)) {
    return filter(f, l.next);
  } else {
    return item(l.val, filter(f, l.next));
  }
};

const dropWhile = <T>(f: (t: T) => boolean, l: List<T>): List<T> => {
  if (isEmpty(l)) return l;
  if (!f(l.val)) return l;

  return dropWhile(f, l.next);
};

const n4 = item(1, item(2, item(3, item(4))));
console.log(dropWhile((x: number) => x < 2, n4));
```
