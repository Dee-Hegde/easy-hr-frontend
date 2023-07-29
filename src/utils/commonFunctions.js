
export const checkIsValid = (value = '', format) => {
  return format.test(value);
};

export const numberWithCommas = (x) => {
  return x.toString().split('.')[0].length > 3
    ? x
        .toString()
        .substring(0, x.toString().split('.')[0].length - 3)
        .replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
        ',' +
        x.toString().substring(x.toString().split('.')[0].length - 3)
    : x.toString();
};

export const ageCalculator = (dateOfBirth) => {
  var dob = new Date(dateOfBirth ? dateOfBirth : ''); //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime(); //convert the calculated difference in date format
  var age_dt = new Date(month_diff); //extract year from date
  var year = age_dt.getUTCFullYear(); //now calculate the age of the user
  var agecalculate = Math.abs(year - 1970); //display the calculated age
  return agecalculate;
};

export const getNameInitials = (name = '') => {
  name = name?.trim?.();
  if (!name) return;

  let initials = name[0] || '';
  const index = name.indexOf(' ');
  if (index < name.length && index > 1) {
    initials += name[index + 1];
  }

  return initials.toUpperCase();
};