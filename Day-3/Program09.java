import java.util.*;
public class Program09 
{
	public static String Missing(String sen) 
	{
		boolean[] s=new boolean[26];
		sen=sen.toLowerCase();
		for(char ch:sen.toCharArray()) 
		{
			if(ch>='a'&&ch<='z') 
			{
                		s[ch-'a']=true;
            		}
        	}
        	StringBuilder miss=new StringBuilder();
        	for(int i=0;i<26;i++) 
		{
            		if(!s[i]) 
			{
                		miss.append((char)(i+'a'));
            		}
        	}		
        	if(miss.length()==0) 
		{
            		return "The sentence contains all alphabets";
        	} 
		else 
		{
            		return "Missing letters: " + miss.toString();
        	}
    	}
    	public static void main(String[] args) 
	{
        	Scanner sc=new Scanner(System.in);
        	System.out.println("Enter a sentence:");
        	String in=sc.nextLine();
        	System.out.println(Missing(in));
    	}
}
