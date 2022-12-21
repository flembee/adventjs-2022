# Challenge 1

The elves bought a gift-wrapping machine this year. But it's not programmed! We need to create an algorithm that helps it in the task.

The machine receives an array of gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:

```js
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */
```

As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

**Note:** The \n represents a line break.

**Watch out!** Make sure you put the right number of * symbols to wrap completely the string. But not too many! Just enough to cover the string.

Ah, **and do not mutate the original array!**

# Analysis

We need a script that wraps a word in paper (*), that is:

```
******
*cat*
******
```

## What are we going to use?

Since we are going to return more than one line as a response, we are going to have to use `\n`, this symbol creates a newline.

# Solution

### Iterate through the gift list

```js
function wrapping(gifts) {
  return gifts.map(gift => {})
}
```

First we have to use the map function on the lists, so it will return another list. Then, we can use it to wrap the gifts in paper (*) in this way, the array is already formed without the need to create a variable and push the gifts one by one.

`.map(gift => {})` gift is an argument of the arrow function that is inside the map function.

### Adding the paper

By iterating element by element of the list, we get the length of the word and add its "corners" to it to find the paper that would go below and above the word (gift).

```js
function wrapping(gifts) {
  return gifts.map(gift => {
    const paper = "*".repeat(gift.length + 2)
  })
}
```

We define a variable where we store the paper that goes above and below the word, and in this we are going to put our paper symbol (*).

```js 
"*".repeat(gift.length + 2)
```

This will repeat the string `gift.length + 2` times, to add its two corners.

Now we just need to match the papers together with the word, so we're going to return the following:

```js
return `${paper}\n*${gift}*\n${paper}`
```

**Note:** add horizontal paper `*${gift}*` and the corresponding line breaks.
