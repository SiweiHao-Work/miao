class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }

  div(c) {
    var denominator = c.real * c.real + c.imag * c.imag

    return new Complex(
      (this.real * c.real + this.imag * c.imag) / denominator,
      (this.imag * c.real - this.real * c.imag) / denominator
    )
  }
}

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(v) {
    var x = this.x + v.x
    var y = this.y + v.y
    return new Vector(x, y)
  }
  minus(v) {
    var x = this.x - v.x
    var y = this.y - v.y
    return new Vector(x, y)
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

class Stack {
  constructor() {
    this.array = []
  }

  push(e) {
    this.array.push(e)
  }

  pop() {
    return this.array.pop()
  }

  get size() {
    return this.array.length
  }
}

class Queue {
  constructor() {
    this.array = []
  }

  add(f) {
    this.array.push(f)
  }

  pop() {
    return this.array.shift()
  }

  get size() {
    return this.array.length
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(g) {
    var newNode = new Node(g)
    if (!this.head) {
      this.head = newNode
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  prepend(h) {
    var newNode = new Node(h)

    newNode.next = this.head
    this.head = newNode

    this.length++
  }

  get size() {
    return this.length
  }

  at(index) {
    if (index < 0 || index >= this.length) return null

    var current = this.head
    var i = 0

    while (i < index) {
      current = current.next
      i++
    }
    return current.value
  }
}

class MyMap {
  constructor() {
    this._keys = []
    this._vals = []
    this._size = 0
  }

  set(key, val) {
    for (var i = 0; i < this._keys.length; i++) {
      if (key === this._keys[i]) {
        this._vals[i] === val
        return this
      }
    }

    this._keys.push(key)
    this._vals.push(val)
    this._size++
    return this
  }

  get(key) {
    for (var i = 0; i < this._keys.length; i++) {
      if (key === this._keys[i]) {
        return this._vals[i]
      }
    }
    return undefined
  }

  get size() {
    return this._size
  }

  delete(key) {
    for (var i = 0; i < this._keys.length; i++) {
      if (key === this._keys[i]) {
        this._res.splice(i, 1)
        return true
      }
    }
    return false
  }
}

class MySet {
  constructor() {
    this._array = []
    this._size = 0
  }

  add(val) {
    if (!this.has(val)) {
      this._array.push(val)
      this._size++
    }
    return this
  }

  delete(val) {
    for (var i = 0; i < this._array.length; i++) {
      if (this._array[i] === val) {
        this._array.splice(i, 1)
        this._size--
        break
      }
    }
    return this
  }

  has(val) {
    for (var i = 0; i < this._array.length; i++) {
      if (this._array[i] === val) {
        return true
      }
    }
    return false
  }

  get size() {
    return this._size
  }
}
