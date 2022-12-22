# Challenge 4

Santa Claus needs to review his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width, and height.

Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes in one so that each box contains another (which in turn contains another, and so on).

Each box represents its measures with an object. For example: {l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width of 3 and a height of 2.

A box fits into another box if all the sides of the first are smaller than the sides of the second. The elves have told us that the boxes cannot be rotated, so you cannot put a box of 2x3x2 in a box of 3x2x2. Let's see some examples:

```js
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
```

In the previous example, the smallest box fits into the largest box. Therefore, it is possible to pack all the boxes in one. Now let's see a case that does not:

```js
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false
```

In the previous example, the smallest box fits into the middle box, but the middle box does not fit into the largest box. Therefore, it is not possible to pack all the boxes in one.

Note that the boxes may not come in order:

```js
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes) // true
```

In the previous example, the first box fits into the third, and the third into the second. Therefore, it is possible to pack all the boxes in one.

Things to keep in mind:

- The boxes cannot be rotated because the elves have told us that the machine is not ready.
- The boxes may come in any order.
- The boxes are not always squares, they could be rectangles.

# Analysis

We must organize the boxes in ascending order according to their size (from smallest to largest), then we can check their sizes to confirm that each one fits in the next.

## What are we going to use?

We will use the following functions [sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and [every](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

### Sorting boxes from smallest to largest

> The sort() method sorts the elements of an array locally and returns the sorted array.

 - If it returns less than 0, the value `a` will be placed before `b`.
 - If it returns 0, it is left in the same place, but ordered with respect to the other elements.
 - If it returns greater than 0, the value `a` will be placed after `b`.

```js
boxes.sort((a, b) => {
  return (a.l + a.w + a.h) - (b.l + b.w + b.h)
})
```

Add all the sides of `a` and all the sides of `b`, and then subtract them, if we change places `b` and `a`, they will be ordered from greater to lesser.

### Confirm if all the elements of the array satisfy the condition

The condition is that the previous box is smaller, since we have the boxes ordered from smallest to largest:

```js
[ 
  { l: 1, w: 1, h: 1 }, 
  { l: 2, w: 2, h: 2 }, 
  { l: 3, w: 1, h: 3 } 
]
```

If we take the box at index 1 `{ l: 2, w: 2, h: 2 }`, we will check the previous box `{ l: 1, w: 1, h: 1 }`, will satisfy the condition if `l, w and h` are greater in the box that is at higher index.

```js
{ l: 2, w: 2, h: 2 } Box index 1
     
{ l: 1, w: 1, h: 1 } Box index 0
```

Thus, it will return `true` if `l, w and h` of the box at index 1 is greater than `l, w and h` of the box at index 0.

For this we will use the method `.every(callback(element, i))`.

```js
function fitsInOneBox(boxes) {
  const result = boxes.sort((a, b) => {
    return (a.l + a.w + a.h) - (b.l + b.w + b.h)
  }).every((box, i) => {
    if( i === 0 ) return true;
    const prev = boxes[i - 1]
  })
}
```

Already with the two boxes that we will compare defined: Box at index 1: `box` and box at index 0: `prev`

```js
box.l > prev.l && // If l in the box at index 1 is greater than l in the box at index 0 it will return true
box.w > prev.w && // If w in the box at index 1 is greater than w in the box at index 0 it will give true
box.h > prev.h // If h in the box at index 1 is greater than h in the box at index 0 it will give true
```

```js
function fitsInOneBox(boxes) {
  const result = boxes.sort((a, b) => {
    return (a.l + a.w + a.h) - (b.l + b.w + b.h)
  }).every((box, i) => {
    if( i === 0 ) return true;
    const prev = boxes[i - 1]
    return box.l > prev.l && box.w > prev.w && box.h > prev.h
  })

  return result
}
```