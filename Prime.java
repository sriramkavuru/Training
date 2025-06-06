import java.util.*;
class Prime
{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter number ");
		int a=sc.nextInt();
		if(a==2)
		{
			System.out.println("Prime");
		}
		if(a%2==1)
		{
			System.out.println("Prime");
		}
		else
		{
			System.out.println("Not Prime");
		}
	}
}