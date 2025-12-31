#valid Anagaram 

## Problem 
Determine if two strings are anagarms of each other.
A anagaram is a word or pharse formed by rearranging the letter of a different word or pharse , using all orginal letter exactly onece.

##Examples 
Input: "listen", "silent" →  Output: true
Input: "rat", "car" →  Output: false

## Approach / Logic (Detailed)

## 1. Check lengths:
   
  If the two strings have different lengths, they cannot be anagrams.
  Example: "cat" (length 3) and "dogg" (length 4) → immediately return false.

## 2. Count characters in the first string:
   
  Create an object to keep track of how many times each character appears in the first string.
  Example: "listen" → { l:1, i:1, s:1, t:1, e:1, n:1 }.

  Subtract counts using the second string:

 ## 3. Go through each character in the second string.

  For each character:
  If it does not exist in the object or its count is already 0 → the strings are not anagrams.
  Otherwise, decrease the count by 1.
  Example: "silent" subtracting from the object will reduce all counts to 0.

## 4. Check final counts:

  After processing the second string, if all counts are zero → the strings are anagrams.
  If any count is not zero → extra or missing characters exist → not an anagram.

Time & Space Complexity 

## Time Complexity (O(n))

We first loop through the first string to count the frequency of each character → takes O(n) time.
Then we loop through the second string to subtract the counts and check for mismatches → also O(n) time.
Overall, we go through each character in the strings once, so the total time complexity is O(n), where n is the length of the strings.

## Space Complexity (O(n))

We use an object to store the frequency of each character in the first string.
In the worst case, all characters are different, so the object stores n entries.
Therefore, the space complexity is O(n).
O(1) if only lowercase English letters are used (at most 26 characters).

