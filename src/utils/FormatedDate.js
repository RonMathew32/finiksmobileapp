export const formattedDate = currentVoter => {
  const inputDate = currentVoter?.lastInfluenced
    ? new Date(currentVoter?.lastInfluenced)
    : new Date();

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const getDate = new Intl.DateTimeFormat('en-US', options).format(inputDate);
  return getDate;
};
