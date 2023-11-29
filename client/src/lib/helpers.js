const convertDate = (answerDate) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date(answerDate);
  const month = months[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();
  const date = `${month} ${day + 1}, ${year}`;
  return date;
};
module.exports.convertDate = convertDate;
