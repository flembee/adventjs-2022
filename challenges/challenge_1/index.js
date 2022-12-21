function wrapping (gifts) {
  return gifts.map(gift => {

    const paper = "*".repeat(gift.length + 2)

    return `${paper}\n*${gift}*\n${paper}`
  })
}

module.exports = wrapping;