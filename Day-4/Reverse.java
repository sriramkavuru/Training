import java.util.*;
public class Reverse 
{
	public static void main(String[] args)
	{
		ArrayList<Integer> l=new ArrayList<>();
		ArrayList<Integer> r=new ArrayList<>();
        	Scanner s=new Scanner(System.in);
        	System.out.println("Enter the size ");
        	int m,n=s.nextInt();
        	for(int i=0;i<n;i++)
        	{
        		m=s.nextInt();
        		l.add(m);
        	}
        	int q=n-1;
        	for(int i=0;i<n;i++)
        	{
        		r.add(l.get(q));
        		q--;
        	}
        	System.out.println("Reverse list is "+r);
	}

}