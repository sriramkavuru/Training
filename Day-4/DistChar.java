import java.util.*;
public class DistChar 
{
	public static Set<Character> fDistChar(String str) 
	{
        	Set<Character> distChar=new HashSet<>();
        	if (str != null) 
		{
            		for (int i = 0; i < str.length(); i++) 
			{
                		distChar.add(str.charAt(i));
            		}
        	}
        	return distChar;
    	}
    	public static void main(String[] args) 
	{
        	Scanner sc=new Scanner(System.in);
        	System.out.print("Enter a string: ");
        	String i=sc.nextLine();
        	Set<Character> distinctChars=fDistChar(i);
        	System.out.println("Input String: " + i);
        	System.out.println("Distinct Characters: " + distinctChars);
    	}
}
