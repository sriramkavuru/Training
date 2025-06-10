import java.util.*;
public class Rdup 
{
	public static void main(String[] args) 
	{
		ArrayList<Integer> l =new ArrayList<>();
		Scanner s=new Scanner(System.in);
		System.out.println("Enter the size ");
		int n=s.nextInt();
		System.out.println("Enter the numbers ");
		for(int i=0;i<n;i++)
		{
			int m=s.nextInt();
			l.add(m);
		}
		Set<Integer> s1=new LinkedHashSet<>(l);
		ArrayList<Integer>r=new ArrayList<>(s1);
		System.out.println("After remove duplicates "+r);
	}
}