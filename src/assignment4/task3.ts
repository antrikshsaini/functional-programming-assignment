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

const isLeaf = <T>(t: Tree<T>): t is Leaf<T> => {
  return t.tag === "leaf";
};
const isBranch = <T>(t: Tree<T>): t is Branch<T> => {
  return t.tag === "branch";
};

// Signature    size: Tree<A> -> number
const size = <A>(tree: Tree<A>): number => {
  if (isLeaf(tree)) {
    return 1;
  } else {
    return 1 + size(tree.left) + size(tree.right);
  }
};

const tree1: Tree<number> = {
  tag: "branch",
  left: { tag: "leaf", value: 8 },
  right: {
    tag: "branch",
    left: { tag: "leaf", value: 5 },
    right: { tag: "leaf", value: 9 },
  },
};
// console.log(size(tree1)); // 3

// Signature   max: Tree<number> -> number

const tree2: Tree<number> = {
  tag: "branch",
  left: { tag: "leaf", value: 8 },
  right: {
    tag: "branch",
    left: { tag: "leaf", value: 5 },
    right: { tag: "leaf", value: 9 },
  },
};

const max = (tree: Tree<number>): number => {
  let currentMax = 0;
  if (isLeaf(tree)) {
    currentMax = currentMax >= tree.value ? currentMax : tree.value;
  } else {
    const leftMax = max(tree.left);
    const rightMax = max(tree.right);
    currentMax = leftMax >= rightMax ? leftMax : rightMax;
  }
  return currentMax;
};
// console.log(max(tree2)); //9

// Signature  depth: Tree<A> -> number

const depth = <A>(tree: Tree<A>): number => {
  if (isLeaf(tree)) {
    return 0;
  } else {
    const depthLeft = 1 + depth(tree.left);
    const depthRight = 1 + depth(tree.right);
    return depthLeft >= depthRight ? depthLeft : depthRight;
  }
};

const tree3: Tree<number> = {
  tag: "branch",
  left: { tag: "leaf", value: 8 },
  right: {
    tag: "branch",
    left: { tag: "leaf", value: 5 },
    right: {
      tag: "branch",
      left: { tag: "leaf", value: 7 },
      right: { tag: "leaf", value: 9 },
    },
  },
};

console.log(depth(tree3)); // 3
