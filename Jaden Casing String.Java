/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/



import java.util.Arrays;

public class JadenCase {

	public String toJadenCase(String phrase) {
    String newStr = "";
      
    if (phrase != null && phrase != "") {
      String [] wordsArr = phrase.trim().split(" ");
      
      for (int i = 0 ; i < wordsArr.length; i++) {
        String word = wordsArr[i];
        
        char firstLetter = word.charAt(0);
        char upperCaseLetter = Character.toUpperCase(firstLetter);
        
        String wordSubString = word.substring(1);
        String combinedWord = upperCaseLetter + wordSubString;
        
        
        if (i < wordsArr.length - 1) {
          newStr = newStr + combinedWord + " ";
          
        } else {
          newStr = newStr + combinedWord;
        }

      }
      return newStr;
      
    }
    return null;

	}

}

/* ========================
   Potential optimizations 
   ========================
    
*/
