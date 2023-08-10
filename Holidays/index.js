const holidaysModule = require('./Holidays')

const buisnessDays = new holidaysModule.BuisnessDays


//console.log(buisnessDays.itIsBuisnessDay(new Date()))
const today = new Date()
console.log(today)
console.log(buisnessDays.itIsBuisnessDay(today))
console.log(buisnessDays.itIsHoliday(today))
console.log(buisnessDays.addBuisnessDays(today, -5))
console.log(buisnessDays.getHolidays())
