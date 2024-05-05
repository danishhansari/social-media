const getMonthAndYear = (dateStr) => {
  const date = new Date(dateStr);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  console.log(month + " " + year);
  return `${month} ${year}`;
};

const getFullYear = (dobStr) => {
  const dob = new Date(dobStr);
  const day = dob.getDate();
  const month = dob.toLocaleString("default", { month: "long" });
  const year = dob.getFullYear();

  console.log(day + " " + month + " " + year);
  return `${month} ${day}, ${year}`;
};

export { getMonthAndYear, getFullYear };
