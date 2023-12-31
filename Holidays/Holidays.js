class BusinessDays {

    static holidays = []

    constructor() {
        BusinessDays._setHolidays(new Date().getFullYear())
    }

    static _findTheDay(year, hol) {

        // simple case. just the day of the month
        if (hol.length === 2) {
            const [month, day] = hol
            return new Date(year, month - 1, day)
        }

        // Finding the day of the given week
        let [count, dow, month] = hol
        if (count < 0) {
            month = month + 1 // if we're going backward we starts at the next month
        }
        else {
            count = count - 1 // when we go forward we starts at the first DOW by default.
        }

        const result = new Date(year, month - 1, 1)
        // first part to position at DOW and second to add/subtract amount of weeks needed
        const offSet = (7 + dow - result.getDay()) % 7 + count * 7
        result.setDate(result.getDate() + offSet)

        return result
    }

    static _setHolidays(year) {
        const holidays = []
        // List of FRB and ANB holidays
        // months are indexed by +1ƒ
        // two options to set up a holiday: Exact day of the month or a day of the given week
        // [7, 4] July 4th
        // [4, 4, 11] forth Thursday of November
        // [-1, 1, 5] last Monday of May
        if (year >= 1885) holidays.push(['New Years Day', [1, 1]])
        if (year >= 1986) holidays.push(['Martin Luther King Day', [3, 1, 1]])
        if (year >= 1879) holidays.push(['Presidents Day', [3, 1, 2]])
        if (year >= 1868) holidays.push(['Memorial Day', [-1, 1, 5]])
        if (year >= 2021) holidays.push(['Juneteenth', [6, 19]])
        if (year >= 1776) holidays.push(['Independence Day', [7, 4]],)
        if (year >= 1882) holidays.push(['Labor Day', [1, 1, 9]])
        if (year >= 1971) holidays.push(['Columbus Day', [2, 1, 10]])
        if (year >= 1938) holidays.push(['Veterans Day', [11, 11]])
        if (year >= 1885) holidays.push(['Thanksgiving Day', [4, 4, 11]])
        if (year >= 1870) holidays.push(['Christmas Day', [12, 25]])

        const result = holidays.map(hol => {
            return BusinessDays._findTheDay(year, hol[1]).toString().slice(0, 15)
        })

        BusinessDays.holidays['y' + year] = result
    }

    getHolidays(year = new Date().getFullYear()) {
        if (!BusinessDays.holidays['y' + year]) {
            BusinessDays._setHolidays(year)
        }
        return BusinessDays.holidays['y' + year]
    }

    itIsHoliday(date) {
        const holidays = this.getHolidays(date.getFullYear())
        return holidays.includes(date.toString().slice(0, 15))
    }

    itIsBusinessDay(date) {
        return date.getDay() !== 6 && date.getDay() !== 0 && !this.itIsHoliday(date)
    }

    addBusinessDays(date, count) {
        const newDate = new Date(date)
        const step = (count > 0) ? 1 : -1
        while (count) {
            newDate.setDate(newDate.getDate() + step)
            if (this.itIsBusinessDay(newDate)) count = count - step
        }
        return newDate
    }
}

module.exports = {
    BusinessDays
}
