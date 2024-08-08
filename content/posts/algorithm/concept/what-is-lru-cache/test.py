class Node:
    def __init__(self, value, prev=None, next=None) -> None:
        self.value = value
        self.prev = prev
        self.next = next
        
class LRU:
    def __init__(self, capacity) -> None:
        self.capacity = capacity
        self.head = Node(None)
        self.tail = Node(None)
        self.head.next = self.tail
        self.tail.prev = self.head
        
        
    def put(self, value):
        # 만약 용량이 가득 차있을 경우
        if  self.currentCapacity() == self.capacity:
            # 가장 오랫동안 참조하지 않은 값을 제거
            remove_node = self.tail.prev
            remove_node.prev.next = self.tail
            self.tail.prev = remove_node.prev
        
        new_node = Node(value)
        
        self.head.next.prev = new_node
        new_node.prev, new_node.next = self.head, self.head.next
        self.head.next = new_node
        
        self.printAll()
        
    def get(self, value):
        # 처음 값을 가져옴
        node = self.head.next
        
        while node.value:
            if node.value == value:
                node.prev.next, node.next.prev = node.next, node.prev
                self.put(value)
                return
            
            node = node.next
    
    # LRU 용량 체크
    def currentCapacity(self):
        count = 0
        
        node = self.head.next
        
        while node.value:
            count += 1
            node = node.next
    
        print("[Current Capacity", count, end="] => LRU : ")
            
        return count
        
        
    # 모든 노드 출력
    def printAll(self):
        node = self.head.next
        
        while node.value:
            print(node.value, end="")
            
            node = node.next
            
            if node.value:
                print(" -> ", end="")
                
        print()
            
if __name__ == "__main__" :
    lru = LRU(5)
    lru.put(1)
    lru.put(2)
    lru.put(3)
    lru.put(4)
    lru.put(5)
    lru.get(3)
    lru.put(6)