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
    
};

console.log("******************************");
console.log("Add Two Numbers\n");

let listNode1A = new ListNode(3);
let listNode1B = new ListNode(4, listNode1A);
let listNode1C = new ListNode(2, listNode1B);
console.log(listNode1C);