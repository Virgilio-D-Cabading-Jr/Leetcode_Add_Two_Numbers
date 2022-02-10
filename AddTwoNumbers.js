///////////////////////////////////////////////////////////
//  ADD TWO NUMBERS
///////////////////////////////////////////////////////////

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const printListNode = (list) => {
    let runner = list;
    let output = "ListNode:"
    while (runner) {
        output = output + runner.val;
        runner = runner.next
    }
    return output;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let output = new ListNode(0, null);
    let list1 = l1, list2=l2;
    let runner = output;
    let carry = 0;

    // Iterate through Lists until get to the end of one of them
    while ( (list1 !== null) && (list2 !== null)) {
        let sum = carry + list1.val + list2.val;
        runner.next = new ListNode( sum%10, null );
        runner = runner.next;
        carry = Math.floor( sum/10 );
        list1 = list1.next;
        list2 = list2.next;
    }

    // Find the none empty list and iterate through it
    if (list1 !== null) {
        while (list1 !== null) {
            let sum = carry + list1.val;
            runner.next = new ListNode( sum%10, null );
            runner = runner.next;
            list1 = list1.next;
            carry = Math.floor( sum/10 );
        }
    } else {
        while (list2 !== null) {
            let sum = carry + list2.val;
            runner.next = new ListNode( sum%10, null );
            runner = runner.next;
            list2 = list2.next;
            carry = Math.floor( sum/10 );
        }
    }
    if (carry!== 0) {
        runner.next = new ListNode( carry, null );
    }
    return output.next;
};

console.log("******************************");
console.log("Add Two Numbers\n");

let listNode1A = new ListNode(9);
let listNode1B = new ListNode(9, listNode1A);
let listNode1C = new ListNode(9, listNode1B);
listNode1C = new ListNode(9, listNode1C);
listNode1C = new ListNode(9, listNode1C);
listNode1C = new ListNode(9, listNode1C);

listNode1C = new ListNode(9, listNode1C);
// console.log(listNode1C);

let listNode2A = new ListNode(9);
let listNode2B = new ListNode(9, listNode2A);
let listNode2C = new ListNode(9, listNode2B);
listNode2C = new ListNode(9, listNode2C);
// console.log(listNode2C);

console.log(printListNode(addTwoNumbers(listNode1C, listNode2C)));