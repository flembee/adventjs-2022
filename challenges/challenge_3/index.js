function distributeGifts(packOfGifts, reindeers) {
  let maxWeight = reindeers.join("").length * 2
  let boxWeight = packOfGifts.join("").length
  return (maxWeight / boxWeight) >> 0
}

module.exports = distributeGifts