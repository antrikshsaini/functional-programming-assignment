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
    tag: "leaf",
    value: "leaf1"
};
// console.log(size(tree1)); // 3
// Signature   max: Tree<number> -> number
var tree2 = {
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
console.log(depth(tree2));
