/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res=new ListNode();
    let temp=res;
    let carry=0;
    while(l1!==null || l2!==null || carry!==0){
        let sum=(l1?.val || 0) +(l2?.val || 0)+carry;
        carry=Math.floor(sum/10);
        sum=sum%10;
        temp.next=new ListNode(sum);
        temp=temp.next;
        if(l1){
            l1=l1.next;
        }
        if(l2){
            l2=l2.next;
        }
    }
   
    return res.next;
};