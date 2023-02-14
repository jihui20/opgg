const getMathRound = (value, standard) => {
  if (value === 0 || standard === 0) {
    return 0;
  }

  return Math.round((value / standard) * 10) / 10;
};

const getKda = (kills, assists, deaths, games) => {
  const killsAverage = getMathRound(kills, games);
  const assistsAverage = getMathRound(assists, games);
  const deathsAverage = getMathRound(deaths, games);

  return (killsAverage + assistsAverage / deathsAverage).toFixed(2);
};

const getAverage = (kills, assists, deaths, games) => {
  const killsAverage = getMathRound(kills, games);
  const assistsAverage = getMathRound(assists, games);
  const deathsAverage = getMathRound(deaths, games);

  return `${killsAverage} / ${assistsAverage} / ${deathsAverage}`;
};

const getWinningRate = (wins, games) => {
  if (wins === 0 || games === 0) {
    return 0;
  }

  return Math.floor((wins / games) * 100);
};

export { getKda, getAverage, getWinningRate };
