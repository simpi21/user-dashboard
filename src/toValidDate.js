function toValidDate(str) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fragment = str.split(' ').filter(val => val); // filter to remove any empty string
  const year = fragment[2];
  const day = fragment[1];
  const month = months.indexOf(fragment[0])
  return new Date(year, month, day);
}

export default toValidDate;
