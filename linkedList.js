var Node = function(val){
    this.value = val;
    this.next = undefined;
}

var LinkedList = function(node){
    this.tail = node;
    this.head = node;
    this.length = 1;
}

LinkedList.prototype.add = function(node){
    if(this.tail === undefined){
        this.tail = node;
        this.head = node;
    }else{
        this.tail.next = node;
        this.tail = this.tail.next;
    }  
    this.length++;
}

LinkedList.prototype.removeAtIndex = function(index){
    if(index === 0){
        this.head = this.head.next;
        this.length--;
    }
    else{
        var currentNode = this.head;
        var traversed = 0;
        var prevNode = this.head;
        while(currentNode.next != undefined){
            if(traversed == index){
                prevNode.next = currentNode.next;
                this.length--;
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
            traversed++;
        }
        if(traversed == index && currentNode == this.tail){
            prevNode.next = undefined;
            this.tail = prevNode;
            this.length--;
        }
    }
}

LinkedList.prototype.addAtIndex = function(node, index){
    if(index>this.length){
        err.message =  "UnsupportedOperation: Index exceeds the linked list length";
        throw err;
    }
    else if(index === 0){
        node.next = this.head;
        this.head = node;
        this.length++;
    }else if(index === this.length){
        this.add(node);
    }else{
        var currentNode = this.head;
        var traversed = 0;
        while(traversed < this.length){
            if(traversed === index-1){
                node.next = currentNode.next;
                currentNode.next = node;
                this.length++;
                break;
            }traversed++;
            currentNode = currentNode.next;
        }
    }
}

var linkedList = new LinkedList(new Node(2));

linkedList.add(new Node(5));
linkedList.add(new Node(10));
linkedList.add(new Node(11));
linkedList.add(new Node(14));
linkedList.add(new Node(16));
linkedList.removeAtIndex(0);
linkedList.removeAtIndex(1);
linkedList.removeAtIndex(3);
linkedList.addAtIndex(new Node(10), 0);
linkedList.addAtIndex(new Node(15), 3);
linkedList.addAtIndex(new Node(20), 0);
console.log(linkedList);




