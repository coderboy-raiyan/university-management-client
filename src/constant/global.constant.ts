export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Gender = {
  male: "male",
  female: "female",
};

export const BloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodGroupOptions = BloodGroup.map((vl) => ({
  value: vl,
  label: vl,
}));
export const genderOptions = Object.values(Gender).map((vl) => ({
  value: vl,
  label: vl,
}));

export const MonthsOptions = Months.map((val) => ({
  value: val,
  label: val,
}));
