import { resume } from "./resume";
import { calculateDateDifference, getCurrentDate } from "../util/dateUtil";

// resume.basics.name
export function yearsOld() {
  const dobString = resume.basics.dob
  const birthDate = new Date(dobString);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  return today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
    ? (age - 1).toString()
    : age.toString();
}

export function yearsInTech() {
  const startDate = resume.beganWorkingInTech
  const endDate = getCurrentDate()
  const diff = calculateDateDifference(startDate, endDate)
  const yearsDecimal = diff.years + diff.months / 12;
  return yearsDecimal.toFixed(1);
}

export function ActiveCertifications() {
  return "X";
}

export function ExpiredCertifications() {
  return "X";
}
