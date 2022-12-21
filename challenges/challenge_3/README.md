# Challenge 3

You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a weight limit.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. You can't split gifts packs.

```js
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24

distributeGifts(packOfGifts, reindeers) // 2
```

Things to keep in mind:

- The gifts pack can't be splitted.
- Gifts and reindeers' names length will always be greater than 0.

# Analysis

We must get the length of the name of each reindeer and each gift. Then divide the maximum weight that the reindeer can carry and the weight of each box (float type number), therefore, we will have to round it down, since that we cannot split boxes.

## What are we going to use?

We will only use basic string and array methods, like join and length.

## Get the length of words

We could map reindeer by reindeer and then add it, do the same for gifts, join the names into a single string and find its length. So:

We have two reindeer, *Dasher* and *Dancer*, each one has 6 letters in its name, therefore, we have that each reindeer can carry `6 * 2 = 12` of weight and together `(6 * 2) + (6 * 2) = 24`, but if we add the two names, we will have the same answer, `12 * 2 = 24)`

`["Dasher", "Dancer"].join("") = DasherDancer`

```js
function distributeGifts(packOfGifts, reindeers) {
  let maxWeight = reindeers.join("").length * 2
  let boxWeight = packOfGits.join("").length
}
```

## Split the weights

```js
number >> 0
```

This will round the number down, or in other words, remove everything after the floating point.

```js
function distributeGifts(packOfGifts, reindeers) {
  let maxWeight = reindeers.join("").length * 2
  let boxWeight = packOfGifts.join("").length
  return (maxWeight / boxWeight) >> 0
}
```