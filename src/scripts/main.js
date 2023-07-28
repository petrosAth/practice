import '../stylesheets/normalize.css';
import '../stylesheets/typography.css';
import '../stylesheets/variables.css';
import '../stylesheets/main.css';

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.listHead = null;
  }
  append(value) {
    const node = this.listHead;
    if (node === null) {
      this.listHead = new Node(value);
      return;
    } else {
      const searchList = (node) => {
        if (node.nextNode === null) {
          node.nextNode = new Node(value);
          return;
        }
        searchList(node.nextNode);
      };
      return searchList(node);
    }
  }
  prepend(value) {
    let node = this.listHead;
    if (node === null) {
      node = new Node(value);
      return;
    }
    const newHeadNode = new Node(value, node);
    this.listHead = newHeadNode;
  }
  get head() {
    return this.listHead;
  }
}
