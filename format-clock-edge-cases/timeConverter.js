function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  if (hours === 12) {
    return `${time} pm`;
  }
  if (hours === 0) {
    return `12:00 am`;
  }
  return `${time} am`;
}

export {formatAs12HourClock};
