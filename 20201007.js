/*
問題
https://www.codewars.com/kata/5f6d120d40b1c900327b7e22/solutions
 */

function leaderboardSort(leaderboard, changes) {
  changes.forEach((value) => {
    const [name, index] = value.split(' ');
    const changeIndex = parseInt(index);

    leaderboard.splice(leaderboard.indexOf(name) - changeIndex, 0, ...leaderboard.splice(leaderboard.indexOf(name), 1));
  })
  return leaderboard
}
