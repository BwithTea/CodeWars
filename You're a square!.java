/*
A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number:

*/


public class Square 
{    
    public static boolean isSquare(int n) 
    {   
        if(n<0)
        {
            return false;
        }
        if(n==0)
        {
            return true;
        }
        return ((Math.sqrt(n)) % 1 == 0);
    }
}


/* ========================
   Potential optimizations 
   ========================
    Since I return true or false based on what modulus equates to,  don't need to 
    do separate branches to check n. So, I could have only returned ((Math.sqrt(n)) % 1 == 0);
*/


