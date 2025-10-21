/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  let newStr = ""; //Initialize newStr to ""
  
  if(names.length === 0){
    return "no one likes this"
  }else if(names.length === 1){
    return `${names[0]} likes this`
  }else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  
  if (names.length >= 4) {
    let peopleCount = names.length - 2; // Get the total index and subtract 2
    
    for (i = 0; i < 2; i++) { // Iterate to the second value in array
      var str = names[i];
      
      if (newStr === "") { // Initialize the value of array to str
        newStr = str + ", ";  // Combine the first name with a comma
      }else {
        newStr = newStr + str + " and"; // Combine newStr with the next name and " and"
      }
    }
    
    newStr = `${newStr} ${peopleCount} others like this`; // Combine newStr with the number of others and the rest of the string
  }
  
  return newStr // Return the combined string
}

/* ========================
   Potential optimizations 
   ========================
  This solution has a lot of if statements. I could have used a switch statements to increase readability
  while also increasing scalability. I also didnt need to initialize a newStr variable. I could have just 
  returned it from each line. 
*/
