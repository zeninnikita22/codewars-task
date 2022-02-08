// Our football team finished the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship.
// Rules for counting points for each match:
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:
// there are 10 matches in the championship

function points(games) {
  let numberOfPoints = 0;
  for (i = 0; i <= games.length - 1; i++) {
    if (games[i].charAt(0) > games[i].charAt(2)) {
      numberOfPoints = numberOfPoints + 3;
    } else if (games[i].charAt(0) === games[i].charAt(2)) {
      numberOfPoints = numberOfPoints + 1;
    } else {
      numberOfPoints = numberOfPoints + 0; //I know that basically this is not needed but still inluded just to see all if conditions
    }
  }
  return numberOfPoints;
}
