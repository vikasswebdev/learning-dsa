// LinkedList

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  length = 0;
  head = null;

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  add(element) {
    var node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      var currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  remove(element) {
    var currentNode = this.head;
    var previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  isEmpty = function () {
    return length === 0;
  };

  indexOf(element) {
    var currentNode = this.head;
    var index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  elementAt(index) {
    var currentNode = this.head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  addAt(index, element) {
    var node = new Node(element);
    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if (index > this.length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentNode < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  }

  removeAt(index) {
    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;

    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    return currentNode.element;
  }
}

var newLinkedList = new LinkedList();

newLinkedList.add("Kitten");
newLinkedList.add("puppy");
newLinkedList.add("dog");
newLinkedList.add("cat");
newLinkedList.add("Fish");

console.log("newLinkedList", newLinkedList.removeAt(0));

console.log("newLinkedList", newLinkedList.head);
