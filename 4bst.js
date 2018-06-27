class Node{
  constructor(value){
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor(){
    this.root = null;
  }
  insert(data) {
    // console.log(data + 'data');
    var newnode = new Node(data);
    if (this.root == null){
      this.root = newnode;
    } else {
      this.insertNode(this.root, newnode);
    }
  }
  insertNode(node, newnode) {
    if(newnode.data < node.data) {
      if(node.left == null){
        node.left = newnode;
      } else {
        this.insertNode(node.left, newnode);
      }
    } else {
      if(node.right == null){
        node.right = newnode;
      } else {
        this.insertNode(node.right, newnode);
      }
    }
  }

  inorder(node){
    if(node != null){
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}
let abc = new BST();
abc.insert(10);
abc.insert(5);
abc.insert(4);
abc.insert(6);
abc.insert(18);
abc.insert(16);
abc.insert(20);
abc.inorder(abc.root);