export const AcademicSemesterNameCodeMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

export const AcademicSemesterNameOptions = Object.entries(
  AcademicSemesterNameCodeMapper
).map(([name, code]) => {
  return {
    value: code,
    label: name,
  };
});
