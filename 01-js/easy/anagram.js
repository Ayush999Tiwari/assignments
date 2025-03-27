/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = sortString(str1.tolowercase());  // characers of both strings are sorted in aphabetical order
  str2=  sortString(str2.tolowercase());  // a sort string function is decleard
  // now comparision of both striings should be done
  if(str1==str2){
    return true;
}else{
    rteurn false;
  }
  function sortString(str){
    let char=str.split(''); //split function is inbuiltjs function which split characters of any string
    char.sort();
    let ans= char.join(''); 
    retru  ans;
  )

module.exports = isAnagram;
