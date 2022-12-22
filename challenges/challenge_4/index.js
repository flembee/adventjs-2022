function fitsInOneBox(boxes) {
  const result = boxes.sort((a, b) => {
    return (b.l + b.w + b.h) - (a.l + a.w + a.h)
  }).slice(1).every((box, i) => {
    return box.l < boxes[i].l && box.w < boxes[i].w && box.h < boxes[i].h
  })

  return result
}

module.exports = fitsInOneBox