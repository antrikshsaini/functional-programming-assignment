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

const isLeaf = <T>(t: Tree<T>): t is Leaf<T> => { return t.tag === "leaf" }
const isBranch = <T>(t: Tree<T>): t is Branch<T> => { return t.tag === "branch" }

// Signature    size: Tree<A> -> number
const size = <A>(tree: Tree<A>): number => {

    if (isLeaf(tree)) {
        return 1
    } else {
        return 1 + size(tree.left) + size(tree.right)

    }
}

const testTree: Tree<string> = {
    tag: "branch",
    left: { tag: "leaf", value: "leaf1" },
    right: { tag: "leaf", value: "leaf2" }
}
// console.log(size(testTree)) // 3


