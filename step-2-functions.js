// 1. Sum Zero
const addToZero = (numsArr) => {
  for (let i = 0; i < numsArr.length; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[i] + numsArr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}

// Space Complexity: O(n)

//console.log(addToZero([1, 2, 3])) // false
//console.log(addToZero([1, 2, 3, -2])) // true

// 2. Unique Characters
const hasUniqueChars = (word) => {
  let charSet = new Set();
  for (let i = 0; i < word.length; i++) {
    if (charSet.has(word[i])) {
      return false;
    } else {
      charSet.add(word[i]);
    }
  }
  return true;
}

// Space Complexity O(n)

//console.log(hasUniqueChars("Monday")) // true
//console.log(hasUniqueChars("Moonday")) // false

// 3. Pangram Sentence
const isPangram = (sentence) => {
  let newSentence = sentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (!newSentence.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

// Space Complexity: O(n) 

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True

// console.log(isPangram("I like cats, but not mice"))
// -> False

// 4. Longest Word
const findLongestWord = (words) => {
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord.length;
}

// Space complexity: O(n) 

console.log(findLongestWord(['swift', 'javascript', 'python', 'java'])) 
// -> 10