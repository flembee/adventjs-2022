function getMaxGifts(giftsCities, maxGifts, maxCities) {

  let combinations = [];
  combinations.push([], [giftsCities[0]]);
  giftsCities.shift()

  giftsCities.map(gift => {
    const newList = combinations.map(combination => {
      let comb = [...combination]
      if(comb.length < maxCities) {
        comb.push(gift)
      }
      return comb
    })
    combinations = combinations.concat(newList)
  })

  combinations.shift()

  return Math.max(
    ...combinations.map(combination => {
      let sum = combination.reduce((total, num) => total + num)
      return sum > maxGifts ? 0 : sum
    })
  )

}

module.exports = getMaxGifts
