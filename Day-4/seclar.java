import java.util.*;
public class seclar 
{
	public static void main(String[] args) 
	{
		ArrayList<Integer> a=new ArrayList<>();
		Scanner s=new Scanner(System.in);
		System.out.println("Enter the size of the array ");
		int m,n=s.nextInt();
		System.out.println("Enter the elements ");
		for(int i=0;i<n;i++)
		{
			m=s.nextInt();
			a.add(m);
		}
		Collections.sort(a);
		System.out.println("Second largest element is "+a.get(n-2));
	}
}