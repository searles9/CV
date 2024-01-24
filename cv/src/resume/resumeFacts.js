import { resume } from "./resume";

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
  return "X";
}

export function ActiveCertifications() {
  return "X";
}

export function ExpiredCertifications() {
  return "X";
}
