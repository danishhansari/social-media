const timeSincePost = (postedTime) => {
  const now = new Date();
  const postedDate = new Date(postedTime);
  const elapsedTime = now - postedDate;

  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    return postedDate.toLocaleDateString();
  } else if (days > 0) {
    return days === 1 ? "1d" : `${days}d`;
  } else if (hours > 0) {
    return hours === 1 ? "1h" : `${hours}h`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes}m`;
  } else {
    return seconds === 1 ? "1s" : `${seconds}s`;
  }
};

export { timeSincePost };
