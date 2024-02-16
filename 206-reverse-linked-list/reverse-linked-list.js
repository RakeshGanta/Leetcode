/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev=null;
    let curr=head;
    let fut=null;
    while(curr !==null){
        fut=curr.next;
        curr.next=prev;
        prev=curr;
        curr=fut;
    }
    return prev;
    
};