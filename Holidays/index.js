const holidaysModule = require('./Holidays')

const businessDays = new holidaysModule.BusinessDays


//console.log(businessDays.itIsBusinessDay(new Date()))
const today = new Date()
console.log(today)
console.log(businessDays.itIsBusinessDay(today))
console.log(businessDays.itIsHoliday(today))
console.log(businessDays.addBusinessDays(today, -5))
console.log(businessDays.getHolidays())
