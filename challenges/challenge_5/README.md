# Challenge 5

To not tire the reindeer, Papa Noel wants to leave the maximum number of gifts by making the least number of trips possible.

He has an array of cities where each element is the number of gifts he can leave there. For example, [12, 3, 11, 5, 7]. He also has a limit on the number of gifts that can fit in his bag, and finally, the maximum number of cities that his reindeer can visit.

As he doesn't want to leave a city half-way, if he can't leave all the gifts that are from that city, he doesn't leave any there.

Create a program that tells him the highest sum of gifts that he could distribute, taking into account the maximum number of gifts and the maximum number of cities he can visit. For example:

```js
const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20 (12 + 3 + 5)
```

If it is not possible to make any trips that satisfies everything, the result should be 0. More examples:

```js
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
```

To consider:

 - maxGifts >= 1
 - giftsCities.length >= 1
 - maxCities >= 1
 - The number of maxCities can be greater than giftsCities.length

# Analysis

Find the highest sum that we can get from a list of numbers, with 2 conditions:

1. The highest sum must be `maxGifts`
2. Do not add more than `maxCities` numbers

For example:

```js
const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3
```

We have 5 numbers, of which we cannot add more than 3 at a time and the maximum of the sum must be 20.

The highest sum is `20 = (12 + 3 + 5)`, the highest sum would be `12 + 11 + 7 = 30`, but we must remember that our maximum is `maxGifts = 20`.

## What are we going to use?

Iterate the list of numbers until obtaining all the possible combinations, also validating the length of each possible element in the list so that it is a maximum of 3 numbers.

Sum each element of the list using `.reduce()` and then find the highest value with `Math.max()`

### Get all possible combinations

Now we will create a variable for our giftsCities of combinations and push an empty giftsCities and a giftsCities containing the `index = 0`, that is, `giftsCities[0]`

```js
let combinations = []
combinations.push(
  [], [giftsCities[0]]
)
```

Now we will remove the first item from the giftsCities:

```js
giftsCities.shift()
```

```js
[ [], [1] ] // Current combinations

giftsCities.map(gift => {
  const newList = combinations.map(combination => {
    let comb = [...combination]
    comb.push(gift)
    /*
    combination is an element of our list, that is:
    [] is the first element and
    [1] is the second element

    We are going to push the element gift of the initial list to both of them, which, in the case of the first iteration, will be number 2.

    Our newList would be:

    [ [2], [1, 2] ]
    */
   return comb
  })
})
```

Join our `combinations` list and the newList

```js
giftsCities.map(gift => {
  const newList = combinations.map(combination => {
    ...
  })
  
  combinations = combinations.concat(newList)
})
```

The result should be:

```js
[
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3]
]
```

To remove the first empty item from the list:

```js
combinations.shift()
```

On the other hand, it is necessary to return lists of less than `maxCities` numbers:

```js
if(comb.length < maxCities) {
  comb.push(x)
}
```

Then add their content and find the largest:

```js
combinations.map(combination => {
  let sum = combination.reduce((total, num) => total + num)
  return sum
})
```

Validate that `sum` is not greater than 20:

```js
combinations.map(combination => {
  let sum = combination.reduce((total, num) => total + num)
  return sum > maxGifts ? 0 : sum // if the sum is greater than 20, it will return 0
})
```

No we need to use `Math.max()`:

```js
return Math.max(
  ...combinations.map(combination => {
    let sum = combination.reduce((total, num) => total + num)
    return sum > maxGifts ? 0 : sum
  })
)
```