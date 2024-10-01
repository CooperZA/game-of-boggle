// Directions for movement in the grid
const directions: number[][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

/**
 * Recursive helper function to check if a word exists in the matrix starting from a given position
 * @param {string[][]} matrix - a 4x4 matrix of letters
 * @param {string} word - the word to find in the matrix
 * @param {number} y - x coordinate in the matrix
 * @param {number} x - y coordinate in the matrix
 * @param {boolean[][]} visited - 4x4 boolean matrix to determine if we have already visited the location in the matrix
 */
function isWordInMatrix(
  matrix: string[][],
  word: string,
  x: number,
  y: number,
  visited: boolean[][]
): boolean {
  if (word.length === 0) {
    return true; // If we've found the full word
  }

  if (y < 0 || y >= 4 || x < 0 || x >= 4) {
    // Out of bounds
    return false;
  }

  if (visited[y][x]) {
    // Already visited this cell
    return false;
  }

  if (matrix[y][x] !== word[0]) {
    // First letter doesn't match
    return false;
  }

  // Mark the current cell as visited
  visited[y][x] = true;

  // Check all 8 possible directions
  for (const [dx, dy] of directions) {
    if (isWordInMatrix(matrix, word.slice(1), y + dx, x + dy, visited)) {
      return true;
    }
  }

  // Backtrack (unmark the current cell)
  visited[y][x] = false;
  return false;
}

/**
 * Main function to find all valid words in the matrix
 * @param {string[][]} matrix - a 4x4 matrix of letters
 * @param {string[]} wordList - list of all words that are allowed
 * @returns {Set<string>} - list of words contained in the matrix
 */
function findWordsInMatrix(
  matrix: string[][],
  wordList: string[]
): Set<string> {
  const foundWords: Set<string> = new Set();

  for (const word of wordList) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const visited: boolean[][] = Array.from({ length: 4 }, () =>
          Array(4).fill(false)
        );
        if (isWordInMatrix(matrix, word, i, j, visited)) {
          foundWords.add(word);
          break; // stop search for word once found
        }
      }
    }
  }

  return foundWords;
}


export default findWordsInMatrix;
