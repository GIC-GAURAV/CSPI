export function convertDateTOIST(inputDate: any, timeZone: string){
  if(inputDate){
  const ISTDate=new Date(inputDate).toLocaleString(undefined, {timeZone});
  return ISTDate
  }
  return '';
}

export function calculateDateTime(endDateValue: any, startDateValue: any) {
  let dur = Math.abs(
    new Date(endDateValue).valueOf() - new Date(startDateValue).valueOf()
  );
  const hours = Math.floor(dur / 3600000);
  dur -= hours * 3600000;
  const minutes = Math.floor(dur / 60000);
  dur -= minutes * 60000;
  const seconds = Math.floor(dur / 1000);
  return isNaN(dur)
    ? ''
    : `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
}
