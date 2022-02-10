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
        console.log(printListNode(output.next));
    }

    // Find the none empty list and iterate through it
    if (list1 !== null) {
        while (list1 !== null) {
            runner.next = new ListNode( list1.val, null );
            runner = runner.next;
            list1 = list1.next;
        }
    } else {
        while (list2 !== null) {
            runner.next = new ListNode( list2.val, null );
            runner = runner.next;
            list2 = list2.next;
        }
    }
    return output.next;
};

console.log("******************************");
console.log("Add Two Numbers\n");

let listNode1A = new ListNode(1);
let listNode1B = new ListNode(0, listNode1A);
let listNode1C = new ListNode(0, listNode1B);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(0, listNode1C);
listNode1C = new ListNode(3, listNode1C);
listNode1C = new ListNode(5, listNode1C);
listNode1C = new ListNode(6, listNode1C);
// console.log(listNode1C);

let listNode2A = new ListNode(4);
let listNode2B = new ListNode(6, listNode2A);
let listNode2C = new ListNode(5, listNode2B);
// console.log(listNode2C);

console.log(printListNode(addTwoNumbers(listNode1C, listNode2C)));