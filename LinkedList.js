'use strict';


class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{ 
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item){
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if(!this.head){
      return null;
    }
    //check for the item
    while(currNode.value !== item){
      //return null if end of the list
      //and the item is not on the list
      if(currNode.next === null){
        return null;
      } else{
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it 
    return currNode;
  }

  remove(item){
    if(!this.head){
      return null;
    }

    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;

    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found on list');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(before, item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;

      while((currNode !== null) && (currNode.value !== before)){
        prevNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('Item not found on list');
        return;
      }
      prevNode.next = new _Node(item, currNode);

    }
  }

  insertAfter(after, item){
    if(this.head === null){
      this.insertFirst(item);
    }

    let currNode = this.head;
    let nextNode = this.head;

    while((currNode.value !== after) && (currNode !== null)){
      currNode = nextNode;
      nextNode = currNode.next;
    }

    let newItem = new _Node(item, nextNode);

    currNode.next = newItem;
  }


  insertAt(item, position){
    if(this.head === null){
      this.insertFirst(item);
    }

    let currNode = this.head;
    let prevNode = this.head;
    let counter = 0;

    while(counter !== position){
      if(!currNode.next){
        this.insertLast(item);
      }

      prevNode = currNode;
      currNode = currNode.next;
      counter++;
    }

    let newItem = new _Node(item, currNode);

    prevNode.next = newItem;
  }
}

const SLL = new LinkedList();

function main(){   

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertFirst('Tauhida');

  SLL.remove('Starbuck');

  SLL.insertBefore('Boomer', 'Athena');

  SLL.insertAfter('Helo', 'Hotdog');

  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');
}

function display(list){
  if(list.head){
    console.log(list.head.value);
  } else {
    console.log('Empty List');
    return;
  }

  let currNode = list.head;

  while(currNode.next !== null){
    console.log(currNode.next.value);
    currNode = currNode.next;
  }
}

function size(list){
  let n = 0;

  if(list.head){
    n = 1;
  } else {
    console.log('Empty list');
    return;
  }

  let currNode = list.head;
  while(currNode.next !== null){
    currNode = currNode.next;
    n++;
  }

  console.log(n);
  return n;
}

function isEmpty(list){
  if(list.head){
    console.log('false');
  } else {
    console.log('true');
  }
}

function findPrevious(list, key){
  if(!list.head){
    return;
  }

  let currNode = list.head;
  let prevNode = list.head;

  while(currNode.value !== key){
    prevNode = currNode;
    currNode = currNode.next;
  }
  console.log(prevNode.value);
  return prevNode.value;
}

function findLast(list){
  if(!list.head){
    return;
  }
  
  let currNode = list.head;
  
  while(currNode.next !== null){
    currNode = currNode.next;
  }

  console.log(currNode.value);
  return currNode.value;
}

//Mystery Program

function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
  
//This function checks if the values of the first and second node are equal, in which case it sets the first node to the second and the second to the third. Otherwise, it sets the value of the first node to the second node and overwrites the rest of the list values.  
//The run time complexity of the function is O(n^2)-Polynomial Time, due to the nested while loops. 
  
//Reverse List
  
function reverseList(list){
  if(!list.head){
    return;
  }
  let currNode = list.head;
  let nextNode = null;
  let prevNode = null;

  while(currNode !== null){
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;    
  }

  list.head = prevNode;
  console.log(JSON.stringify(list));
  return list;
}

//Third from the end

function thirdFromEnd(list){
  if(!list.head){
    return;
  }

  let currNode = list.head;
  while(currNode.next.next.next !== null){
    currNode = currNode.next;
  }
  console.log(currNode);
  return currNode;
}

//Middle of a list

function middleOfList(list){
  /* let counter = 0;
  let currNode = list.head;
  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }
  let middle = Math.floor(counter/2);
  let counterTwo = 0;
  currNode = list.head;
  while ( counterTwo !== middle) {
    currNode = currNode.next;
    counterTwo++;
  }
  console.log(currNode.value);
  return currNode;*/  
  if(!list.head){
    return;
  }

  let fast = list.head;
  let slow = list.head;

  while((fast !== null) && (fast.next !== null)){
    fast = fast.next.next;
    slow = slow.next;
  }

  console.log(slow.value);
  return slow.value;
}

main();
//display(SLL);
//size(SLL);
//isEmpty(SLL);
//findPrevious(SLL, 'Boomer');
//findLast(SLL);
//reverseList(SLL);
//thirdFromEnd(SLL);
//middleOfList(SLL);
