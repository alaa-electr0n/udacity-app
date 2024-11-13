//Friday 27 October 2024
export function formatDate(date) {
  const newDate = date * 1000;
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return new Date(newDate).toLocaleDateString('en-US', options);
}
