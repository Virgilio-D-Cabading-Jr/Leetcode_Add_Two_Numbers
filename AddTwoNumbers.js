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
    console.log("In add two numbers");
    console.log("L1", l1);
    console.log("L2", l2);
    let numL1 = 0;
    let runner = l1;
    let multiplier = 1;
    let arrayL1 = [];

    // Retrieve l1 number
    while (runner !== null) {
        arrayL1.push(runner.val);
        runner = runner.next;
    }
    // console.log("arrayL1:", arrayL1);

    for (let idx=arrayL1.length-1; idx>=0; idx--) {
        numL1 = numL1 + ( arrayL1[idx] * multiplier );
        multiplier = multiplier * 10;
    }
    console.log("numL1", numL1);

    let numL2 = 0;
    runner = l2;
    console.log("runner", runner);
    multiplier = 1;
    let arrayL2 = [];

    // Retrieve L2 number
    while (runner !== null) {
        arrayL2.push(runner.val);
        runner = runner.next;
    }
    console.log("arrayL2", arrayL2)

    for (let idx=arrayL2.length-1; idx>=0; idx--) {
        numL2 = numL2 + ( arrayL2[idx] * multiplier );
        multiplier = multiplier * 10;
        console.log("numL2", numL2, " || arrayL2[idx]", arrayL2[idx])
    }
    console.log("numL2", numL2);
};

console.log("******************************");
console.log("Add Two Numbers\n");

let listNode1A = new ListNode(3);
let listNode1B = new ListNode(4, listNode1A);
let listNode1C = new ListNode(2, listNode1B);
// console.log(listNode1C);

let listNode2A = new ListNode(4);
let listNode2B = new ListNode(6, listNode2A);
let listNode2C = new ListNode(5, listNode2B);
// console.log(listNode2C);

addTwoNumbers(listNode1C, listNode2C);