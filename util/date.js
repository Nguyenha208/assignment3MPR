export function dateFormat(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function getDateMinusDays(date, days) {
  const modifiedDate = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  return modifiedDate;
  
}