export function calculateDateDifference(date1, date2) {
  const year1 = date1.year; // start date
  const month1 = date1.month; // start date
  const year2 = date2.year; // end date
  const month2 = date2.month; // end date

  // Calculate the difference in months
  const monthDifference = (year2 - year1) * 12 + (month2 - month1);

  // Calculate the years and remaining months
  const years = Math.floor(monthDifference / 12);
  const remainingMonths = monthDifference % 12;

  return {
    years: years,
    months: remainingMonths,
  };
}

export function formatYearsMonths(years, months) {
  if (years < 0 || months < 0) {
    return "Error: Invalid input. Both years and months must be non-negative.";
  }

  switch (true) {
    case years === 1 && months === 1:
      return `${years} yr ${months} mo`;
    case years === 1 && months === 0:
      return `${years} yr`;
    case years === 0 && months === 1:
      return `${months} mo`;
    case years === 1 && months !== 0:
      return `${years} yr ${months} mos`;
    case years === 0:
      return `${months} mos`;
    default:
      return `${years} yrs ${months} mos`;
  }
}

export function addDateValues(...dateValues) {
  let totalYears = 0;
  let totalMonths = 0;

  // Loop through the date values and accumulate the years and months
  for (const dateValue of dateValues) {
    const { years, months } = dateValue;
    totalYears += years;
    totalMonths += months;
  }

  // Adjust for months exceeding 12
  totalYears += Math.floor(totalMonths / 12);
  totalMonths = totalMonths % 12;

  return { years: totalYears, months: totalMonths };
}

export function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  // JavaScript months are zero-based
  const month = currentDate.getMonth() + 1; // Adding 1 to match the 1-based month format

  return { year, month };
}

export function getShortMonthName(month) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Convert the input to an integer
  const numericMonth = parseInt(month, 10);

  if (numericMonth >= 1 && numericMonth <= 12) {
    return months[numericMonth - 1];
  } else {
    return "Invalid month";
  }
}

export function isDateAfterToday(dateToCompare) {
  // Get the current date
  const today = new Date();
  // Parse the dateToCompare string into a Date object
  const parsedDate = new Date(dateToCompare);
  // Compare the two dates
  return parsedDate > today;
}

// expects a list of positions
export function calculateTotalTenure(positions) {
  const extractedTenure = positions.map((position) => {
    const isCurrent =
      position.tenure.hasOwnProperty("isCurrentPosition") &&
      position.tenure.isCurrentPosition === true;

    let endYear;
    let endMonth;

    if (isCurrent) {
      const { year, month } = getCurrentDate();
      endYear = year;
      endMonth = month;
    } else {
      endYear = position.tenure.endYear;
      endMonth = position.tenure.endMonth;
    }

    return calculateDateDifference(
      {
        year: position.tenure.startYear,
        month: position.tenure.startMonth,
      },
      {
        year: endYear,
        month: endMonth,
      }
    );
  });

  const totalTenure = addDateValues(...extractedTenure);
  return formatYearsMonths(totalTenure.years, totalTenure.months);
}

export function certificationIsActive(certification) {
  let isActive;
  if (certification.expiryDate.expires) {
    const expiryDate = `${certification.expiryDate.expiryYear}-${certification.expiryDate.expiryMonth}-${certification.expiryDate.expiryDay}`;
    isActive = isDateAfterToday(expiryDate);
  } else {
    isActive = true;
  }
  return isActive;
}