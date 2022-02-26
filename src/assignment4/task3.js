// TODO: Publish to npm
var Leaf = /** @class */ (function () {
    function Leaf(value) {
        this.tag = "leaf";
        this.value = value;
    }
    return Leaf;
}());
var Branch = /** @class */ (function () {
    function Branch(left, right) {
        this.tag = "branch";
        this.left = left;
        this.right = right;
    }
    return Branch;
}());
var isLeaf = function (t) {
    return t.tag === "leaf";
};
var isBranch = function (t) {
    return t.tag === "branch";
};
// const leaf = <T>(val: T): Tree<T> => { return { tag: "leaf", value: val } }
// const branch = <T>(tree: Tree<T>): Tree<T> => { return { tag: "branch", left: tree, right: tree } }
// Signature    size: Tree<A> -> number
var size = function (tree) {
    if (isLeaf(tree)) {
        return 1;
    }
    else {
        return 1 + size(tree.left) + size(tree.right);
    }
};
var tree1 = {
    tag: "branch",
    left: { tag: "leaf", value: 8 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 5 },
        right: { tag: "leaf", value: 9 }
    }
};
// console.log(size(tree1)); // 3
// Signature   max: Tree<number> -> number
var tree2 = {
    tag: "branch",
    left: { tag: "leaf", value: 8 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 5 },
        right: { tag: "leaf", value: 9 }
    }
};
var max = function (tree) {
    var currentMax = 0;
    if (isLeaf(tree)) {
        currentMax = currentMax >= tree.value ? currentMax : tree.value;
    }
    else {
        var leftMax = max(tree.left);
        var rightMax = max(tree.right);
        currentMax = leftMax >= rightMax ? leftMax : rightMax;
    }
    return currentMax;
};
// console.log(max(tree2)); //9
// Signature  depth: Tree<A> -> number
var depth = function (tree) {
    if (isLeaf(tree)) {
        return 0;
    }
    else {
        var depthLeft = 1 + depth(tree.left);
        var depthRight = 1 + depth(tree.right);
        return depthLeft >= depthRight ? depthLeft : depthRight;
    }
};
var tree3 = {
    tag: "branch",
    left: { tag: "leaf", value: 8 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 5 },
        right: {
            tag: "branch",
            left: { tag: "leaf", value: 7 },
            right: { tag: "leaf", value: 9 }
        }
    }
};
// console.log(depth(tree3)); // 3
// Signature  map: ((A)-> B) -> Tree<A> -> Tree<B>
var map = function (f, tree) {
    if (isLeaf(tree)) {
        return new Leaf(f(tree.value));
    }
    else {
        return new Branch(map(f, tree.left), map(f, tree.right));
    }
};
// curry form
var mapCurry = function (f) { return function (tree) {
    if (isLeaf(tree)) {
        return new Leaf(f(tree.value));
    }
    else {
        return new Branch(map(f, tree.left), map(f, tree.right));
    }
}; };
var tree4 = {
    tag: "branch",
    left: { tag: "leaf", value: 2 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 3 },
        right: { tag: "leaf", value: 4 }
    }
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
var filter = function (f, tree) {
    if (isLeaf(tree)) {
        return !f(tree.value) ? new Leaf(tree.value) : null;
    }
    else {
        return new Branch(filter(f, tree.left), filter(f, tree.right));
    }
};
var tree5 = {
    tag: "branch",
    left: { tag: "leaf", value: 2 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 5 },
        right: { tag: "leaf", value: 4 }
    }
};
// console.log(filter((i) => i === 5, tree5))
// Branch {
//     tag: 'branch',
//     left: Leaf { tag: 'leaf', value: 2 },
//     right:
//      Branch {
//        tag: 'branch',
//        left: null,
//        right: Leaf { tag: 'leaf', value: 4 } } }
// Signature zip 
// type XX = <A,B>(tree1: Leaf<A>,tree2: Leaf<B>) => Leaf<Array<A|B>>
// type YY = <A,B>(tree1: Branch<A>,tree2: Branch<B>) => Branch<Array<A|B>>
var zip = function (tree1, tree2) {
    if (isLeaf(tree1) && isLeaf(tree2)) {
        return new Leaf([tree1.value, tree2.value]);
    }
    else if (isBranch(tree1) && isBranch(tree2)) {
        var leftZipped = zip(tree1.left, tree2.left);
        var rifhtZipped = zip(tree1.right, tree2.right);
        if (leftZipped && rifhtZipped)
            return new Branch(leftZipped, rifhtZipped);
    }
    else {
        return undefined;
    }
};
var tree6 = {
    tag: "branch",
    left: { tag: "leaf", value: 2 },
    right: {
        tag: "branch",
        left: { tag: "leaf", value: 5 },
        right: { tag: "leaf", value: 4 }
    }
};
console.log(JSON.stringify(zip(tree6, tree6), ['left'], 2));
