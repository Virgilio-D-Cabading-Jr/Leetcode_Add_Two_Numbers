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
    let output = null;
    let list1 = l1, list2=l2;
    let carry = 0;
    // console.log (list1, list2)
    while ( (list1 !== null) && (list2 !== null)) {
        let sum = carry + list1.val + list2.val;
        output = new ListNode( sum%10, output );
        carry = Math.floor( sum/10 );
        list1 = list1.next;
        list2 = list2.next;
        console.log("output", output);
    }
};

console.log("******************************");
console.log("Add Two Numbers\n");

let listNode1A = new ListNode(1);
let listNode1B = new ListNode(3, listNode1A);
let listNode1C = new ListNode(4, listNode1B);
// listNode1C = new ListNode(0, listNode1C);
// listNode1C = new ListNode(0, listNode1C);
// listNode1C = new ListNode(0, listNode1C);
// listNode1C = new ListNode(0, listNode1C);
// listNode1C = new ListNode(0, listNode1C);
// listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(2, listNode1C);
// console.log(listNode1C);

let listNode2A = new ListNode(4);
let listNode2B = new ListNode(6, listNode2A);
let listNode2C = new ListNode(5, listNode2B);
// console.log(listNode2C);

console.log(addTwoNumbers(listNode1C, listNode2C));