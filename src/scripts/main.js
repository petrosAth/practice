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
    }

    const searchList = (node) => {
      if (node.nextNode === null) {
        node.nextNode = new Node(value);
        return;
      }

      searchList(node.nextNode);
    };

    return searchList(node);
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

  get size() {
    const node = this.listHead;
    let size = 0;

    if (node === null) {
      return size;
    }

    const searchList = (node) => {
      size++;

      if (node.nextNode === null) {
        return size;
      }

      return searchList(node.nextNode);
    };

    return searchList(node);
  }

  get head() {
    return this.listHead === null ? undefined : this.listHead;
  }

  get tail() {
    const node = this.listHead;

    if (node === null) {
      return undefined;
    }

    const searchList = (node) => {
      if (node.nextNode === null) {
        return node;
      }

      return searchList(node.nextNode);
    };

    return searchList(node);
  }
}
