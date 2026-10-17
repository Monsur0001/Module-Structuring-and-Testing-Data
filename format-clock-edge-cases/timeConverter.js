function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours > 12) {
    const convertedHours = hours - 12;
    // Add leading zero if convertedHours is a single digit
    const formattedHours = convertedHours < 10 ? `0${convertedHours}` : convertedHours;
    return `${formattedHours}:${minutes} pm`;
  }
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  if (hours === 0) {
    return `12:${minutes} am`;
  }
  return `${time} am`;
}

export {formatAs12HourClock};
