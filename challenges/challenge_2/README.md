# Challenge 2

A millionaire bought a social network, and he doesn't bring good news. He has announced that each time an employee misses a working day due to a holiday, they will have to compensate it with two extra hours another working day of the same year.

Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.

Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, return the number of extra hours that would be done during that year:

```js
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year
```

Things to keep in mind:

- The year may be a leap year. Make the checks you need for it, if necessary.
- Although the holiday is December 31, the extra hours will be done the same year.
- Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.

# Analysis

We must receive a list of holidays and validate which of them fall during working hours (Monday to Friday). If this condition is met, we will have to add 2 hours to the total number of hours to be recovered.

So if we have two listed holidays that fall on a Tuesday and a Thursday, workers would have to work up 4 hours.

## What are we going to use?

We will use the Date object to handle dates in a much simpler way, for more information on this object check [Date - MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)

In addition, the Reduce function will be used, more info in [Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

# Solution

### Iterate the list of holidays

```js
function countHours(years, holidays) {
  return holidays.map(holiday => {})
}
```

### Using Date object

We join the year with the date of the list `${year}/${holiday}`, this is necessary to distinguish between leap years and JavaScript does it by default.

```js
function countHours(years, holidays) {
  return holidays.map(holiday => {
    let date = new Date(`${year}/${holiday}`)
  })
}
```

### Distinguish if it is a weekday or weekend

To query the day of the week, use:

```js
date.getDay()
```

| Day | Number |
| --- | ------ |
| Sunday | 0 |
| Monday | 1 |
| Tuesday | 2 |
| Wednesday | 3 |
| Thursday | 4 |
| Friday | 5 |
| Saturday | 6 |

We will add an Array of numbers from 1 to 5 and using the `.includes` function it will be validated if the number returned by the `.getDay()` function of the `Date` object is between Monday and Friday, otherwise it will be Saturday or Sunday. In this way, if this number is in the range of 1 to 5, 2 hours will be added to the hours that workers will have to recover.

```js
[1, 2, 3, 4, 5].includes(
  date.getDay()
)
```

As a result it will be True or False, therefore, we will use a **ternary**

When adding, `true = 1` and `false = 0`

### Calculate the extra hours to recover

With the `.reduce()` function on the list, all the numbers are added and then we will multiply this number by 2, since it is 2 hours per holiday.

```js
  const result = holidays.map(holiday => {
    let date = new Date(`${year}/${holiday}`)
    return(
      [1, 2, 3, 4, 5].includes(
        date.getDay()
      ) ? 1 : 0
    )
  }).reduce((count, extraHour) => count + extraHour) * 2

    return result
```
