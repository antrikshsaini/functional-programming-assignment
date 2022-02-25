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
var isLeaf = function (t) { return t.tag === "leaf"; };
var isBranch = function (t) { return t.tag === "branch"; };
// Signature    size: Tree<A> -> number
var size = function (tree) {
    // if(!isBranch(tree)){return 0}
    // if (!isBranch) { return 0 }
    if (isLeaf(tree)) {
        return 1;
    }
    else {
        return 1 + size(tree.left) + size(tree.right);
        // if(tree.left){
        //     return 1 + size(tree.left)
        // }else if(tree.right) {
        //     return 1 + size(tree.right)
        // }
        // else{ return 0}
    }
    // else if(isLeaf(tree)){
    //     return 1 + size(tree) }
};
var testTree = {
    tag: "branch",
    left: { tag: "leaf", value: "leaf1" },
    right: { tag: "leaf", value: "leaf2" }
};
console.log(size(testTree));
// console.log(dropWhile(
//   (x: number) => x < 2,
//   n4
// ));
