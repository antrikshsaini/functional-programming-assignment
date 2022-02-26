// TODO: Publish to npm

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

const isLeaf = <A>(t: Tree<A>): t is Leaf<A> => {
    return t.tag === "leaf";
};
const isBranch = <A>(t: Tree<A>): t is Branch<A> => {
    return t.tag === "branch";
};

// const leaf = <T>(val: T): Tree<T> => { return { tag: "leaf", value: val } }

// const branch = <T>(tree: Tree<T>): Tree<T> => { return { tag: "branch", left: tree, right: tree } }

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

// console.log(depth(tree3)); // 3


// Signature  map: ((A)-> B) -> Tree<A> -> Tree<B>

const map = <A, B>(
    f: (a: A) => B,
    tree: Tree<A>): Tree<B> => {
    if (isLeaf(tree)) {
        return new Leaf(f(tree.value))
    } else {
        return new Branch(map(f, tree.left), map(f, tree.right))
    }
}

// curry form

const mapCurry = <A, B>(f: (a: A) => B) => (tree: Tree<A>): Tree<B> => {
    if (isLeaf(tree)) {
        return new Leaf(f(tree.value))
    } else {
        return new Branch(map(f, tree.left), map(f, tree.right))
    }
}
const tree4: Tree<number> = {
    tag: "branch",
    left: { tag: "leaf", value: 2 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 3 },
        right: { tag: "leaf", value: 4 }
    },
};

// console.log(map((i) => i + 1, tree4)); 

/**
 *
 * Branch { tag: 'branch',
    left: Leaf { tag: 'leaf', value: 3 },
    right: Branch {
        tag: 'branch',
        left: Leaf { tag: 'leaf', value: 4 },
        right: Leaf { tag: 'leaf', value: 5 }
        }
    }
 *
 */


// console.log(mapCurry((i: number) => i + 1)(tree4));

/**
 * 
 * Branch { tag: 'branch',
    left: Leaf { tag: 'leaf', value: 3 },
    right: Branch {
        tag: 'branch',
        left: Leaf { tag: 'leaf', value: 4 },
        right: Leaf { tag: 'leaf', value: 5 }
        }
    }
 * 
 */

// Signature  filter : ((Tree<A>)=> boolean) => Tree<A> => Tree<A>

const filter = <A>(
    f: (val: A) => boolean,
    tree: Tree<A>): any => {

    if (isLeaf(tree)) {
        return !f(tree.value) ? new Leaf(tree.value) : null

    } else {
        return new Branch(filter(f, tree.left), filter(f, tree.right))

    }

}
const tree5: Tree<number> = {
    tag: "branch",
    left: { tag: "leaf", value: 2 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 5 },
        right: { tag: "leaf", value: 4 }
    },
};

// console.log(filter((i) => i === 5, tree5))

/** 
 * Branch {
    tag: 'branch',
    left: Leaf { tag: 'leaf', value: 2 },
    right:
     Branch {
       tag: 'branch',
       left: null,
       right: Leaf { tag: 'leaf', value: 4 } } }
*/


// Signature zip: Tree<A> -> Tree<B> -> Tree<Array<A|B>>

const zip = <A, B>(tree1: Tree<A>, tree2: Tree<B>): Tree<Array<A | B>> | undefined => {
    if (isLeaf(tree1) && isLeaf(tree2)) {
        return new Leaf([tree1.value, tree2.value])
    } else if (isBranch(tree1) && isBranch(tree2)) {
        const leftZipped = zip(tree1.left, tree2.left)
        const rifhtZipped = zip(tree1.right, tree2.right)
        if (leftZipped && rifhtZipped)
            return new Branch(leftZipped, rifhtZipped)
    } else {
        return undefined
    }
}

const tree6: Tree<number> = {
    tag: "branch",
    left: { tag: "leaf", value: 2 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 5 },
        right: { tag: "leaf", value: 4 }
    },
};

console.log(JSON.stringify(zip(tree6, tree6), null, 2))
/** {
  "tag": "branch",
  "left": {
    "tag": "leaf",
    "value": [
      2,
      2
    ]
  },
  "right": {
    "tag": "branch",
    "left": {
      "tag": "leaf",
      "value": [
        5,
        5
      ]
    },
    "right": {
      "tag": "leaf",
      "value": [
        4,
        4
      ]
    }
  }
}*/
