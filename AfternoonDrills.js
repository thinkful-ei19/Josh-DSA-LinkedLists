'use strict';

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