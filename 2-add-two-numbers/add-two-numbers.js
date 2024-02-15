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
    while(l1!==null || l2!==null){
        const val=(l1?.val || 0) +(l2?.val || 0)+carry;
        const sum=val>9?val-10:val;
        console.log(sum,carry);
        temp.next=new ListNode(sum);
        if(val>9){
            carry=1;
        }else{
            carry=0;
        }
        temp=temp.next;
        if(l1){
            l1=l1.next;
        }
        if(l2){
            l2=l2.next;
        }
    }
    if(carry>0){
        temp.next=new ListNode(carry);
    }
    return res.next;
};