const ReverseDate = (date) => {
  const dateArr = date.split("-");
  const reversedArr = [dateArr[2], dateArr[1], dateArr[0]];
  return reversedArr.join("-");
};

export default ReverseDate;
