///////////////////////////////////////////////////////////
//  ADD TWO NUMBERS
///////////////////////////////////////////////////////////

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let numL1 = ""
    let runner = l1;

    // Retrieve l1 number
    while (runner !== null) {
        numL1 = runner.val + numL1;
        runner = runner.next;
    }

    let numL2 = "";
    runner = l2;

    // Retrieve L2 number
    while (runner !== null) {
        numL2 = runner.val + numL2;
        // multiplier = multiplier * 10;
        runner = runner.next;
    }

    // Get the sum of the two numbers then convert into a SLL
    let sum = BigInt(parseInt(numL1) + parseInt(numL2))).toString();
    console.log("sum", sum);
    let output = null;
    for ( let idx=0; idx<sum.length-1; idx++ ) {
        output = new ListNode( parseInt(sum[idx]), output );
        // console.log(idx,output);
    }
    return output;
};

console.log("******************************");
console.log("Add Two Numbers\n");

let listNode1A = new ListNode(7);
let listNode1B = new ListNode(0, listNode1A);
let listNode1C = new ListNode(0, listNode1B);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(1, listNode1C);
console.log(listNode1C);

let listNode2A = new ListNode(4);
let listNode2B = new ListNode(6, listNode2A);
let listNode2C = new ListNode(5, listNode2B);
console.log(listNode2C);

console.log(addTwoNumbers(listNode1C, listNode2C));