export const secondsToMS = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes}:${seconds}`;
}

export const extractDateAndTime = dateObj => {
  console.log(dateObj)
  const date = new Date(dateObj);
  const results = [];

  const dateStringArray = date.toDateString().split(' ');
  dateStringArray.shift();
  dateStringArray[1] = `${dateStringArray[1]},`
  results.push(dateStringArray.join(' '));

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  const time = hours + ':' + minutes + ' ' + amOrPm;
  results.push(time)
  
  return results;
}

