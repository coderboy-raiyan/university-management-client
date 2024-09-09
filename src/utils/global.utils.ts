export const yearOptions = new Array(5).fill(1).map((__, i) => {
  const updatedYear = new Date().getFullYear() + i;
  return {
    value: updatedYear.toString(),
    label: updatedYear.toString(),
  };
});
