function countHours(year, holidays) {

  const result = holidays.map(holiday => {

    let date = new Date(`${year}/${holiday}`)
    return [1, 2, 3, 4, 5].includes(date.getDay())
    
  }).reduce((count, extraHour) => count + extraHour) * 2

  return result
}

module.exports = countHours