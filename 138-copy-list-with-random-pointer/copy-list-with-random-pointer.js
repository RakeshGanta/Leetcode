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
    // const map=new Map();
    let input=head;
    // let input2=head;
    // while(input!=null){
    //     map.set(input,new ListNode(input.val));
    //     input=input.next;
    // }
    // while(input2!==null){
    //     temp.next=map.get(input2);
    //     temp.next.random=map.get(input2.random);
    //     temp=temp.next;
    //     input2=input2.next;
    // }
    // return res.next;
    let dummy=input?.next||null
    while(input!==null){
        // dummy.next=input.next;
        // let dummy=input.next;
        input.next=new ListNode(input.val);
        input.next.next=dummy;
        input=dummy;
        if(dummy!==null){
            dummy=dummy.next;
        }
    }
    let input2=head;
    while(input2!==null){
        input2.next.random=input2.random?.next || null;
        input2=input2.next.next;
    }
    let input3=head;
    // temp.next=input3.next;
    while(input3!==null){
        temp.next=input3.next;
        input3.next=input3.next.next;
        temp=temp.next;
        input3=input3.next;
    }
    console.log(res.next);
    return res.next;
};