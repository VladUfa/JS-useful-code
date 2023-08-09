const holidaysModule = require('./Holidays')

const buisnessDays = new holidaysModule.BuisnessDays


//console.log(buisnessDays.itIsBuisnessDay(new Date()))
const today = new Date(2022, 5, 19)
console.log(buisnessDays.getHolidays())
console.log(buisnessDays.itIsBuisnessDay(today))
console.log(buisnessDays.itIsHoliday(today))