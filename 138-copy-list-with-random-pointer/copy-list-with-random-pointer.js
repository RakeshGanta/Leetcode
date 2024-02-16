/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const res=new ListNode();
    let temp=res;
    const map=new Map();
    let input=head;
    let input2=head;
    while(input!=null){
        map.set(input,new ListNode(input.val));
        input=input.next;
    }
    while(input2!==null){
        temp.next=map.get(input2);
        temp.next.random=map.get(input2.random);
        temp=temp.next;
        input2=input2.next;
    }
    return res.next;
};