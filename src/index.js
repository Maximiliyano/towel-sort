
// You should implement your task here.

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

module.exports = function towelSort (matrix) 
{
  if(matrix == "undefined" || matrix == null) return [];
  let a = matrix.reduce((acc, cur, i) =>
  {
    cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => acc.push(e));
    return acc;

  }, []);
  return a;
}
