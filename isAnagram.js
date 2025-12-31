function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (count[char] === undefined || count[char] === 0) return false;
    count[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("rat", "car"));       
