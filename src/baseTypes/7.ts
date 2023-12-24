/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
	MONDAY = 'string',
	TUESDAY = 'string',
	WEDNESDAY = 'string',
	THURSDAY = 'string',
	FRIDAY = 'string',
	SATURDAY = 'string',
	SUNDAY = 'string',
}

function isWeekend(day: Day): boolean {
	if (day === Day.SATURDAY || Day.SUNDAY) {
		return true
	} else {
		return false
	}
}
