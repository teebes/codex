export default ts => {
  const date = new Date(Date.parse(ts));

  const month_number = date.getMonth();
  let month_name;

  if (month_number === 0) month_name = "January";
  if (month_number === 1) month_name = "February";
  if (month_number === 2) month_name = "March";
  if (month_number === 3) month_name = "April";
  if (month_number === 4) month_name = "May";
  if (month_number === 5) month_name = "June";
  if (month_number === 6) month_name = "July";
  if (month_number === 7) month_name = "August";
  if (month_number === 8) month_name = "September";
  if (month_number === 9) month_name = "October";
  if (month_number === 10) month_name = "November";
  if (month_number === 11) month_name = "December";

  const month_abbrv = month_name.slice(0, 3);
  const year = date.getFullYear();
  const day = date.getDate();

  return `${month_abbrv} ${day} ${year}`;
};
