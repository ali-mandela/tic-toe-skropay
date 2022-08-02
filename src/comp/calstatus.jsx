function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `game Draw`
    : `Next player: ${nextValue}`;
}

export default calculateStatus;
