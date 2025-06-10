import java.util.*;
public class mergelist
{
	public static void main(String[] args) 
	{
		ArrayList<Integer> a1=new ArrayList<>();
		ArrayList<Integer> a2=new ArrayList<>();
		ArrayList<Integer> r=new ArrayList<>();
		int m,q,z;
        	Scanner s=new Scanner(System.in);
        	System.out.println("Enter the size of 1st array ");
        	int n=s.nextInt();
        	System.out.println("Enter the elements to 1st array");
        	for(int i=0;i<n;i++) 
		{
        		q=s.nextInt();
        		a1.add(q);
        		r.add(q);
        	}
        	System.out.println("Enter the size of the 2nd array");
        	m=s.nextInt();
        	System.out.println("Enter the elements");
        	for(int i=0;i<m;i++) 
		{
        		q=s.nextInt();
        		a2.add(q);
        		r.add(q);
        	}
        	Collections.sort(r);
        	System.out.println("Merge the two arrays "+r);
	}
}