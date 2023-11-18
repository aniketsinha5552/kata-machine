function traverse<T>(head:BinaryNode<number>,arr:number[]){
    if(!head) return;
    if(head.left){
        traverse(head.left,arr)
    }
    if(head.right){
        traverse(head.right,arr)
    }
    arr.push(head.value);

}

export default function post_order_search(head: BinaryNode<number>): number[] {
    //  left,right,root
    let ans:number[]= [];
    
    traverse(head,ans);
    return ans;
}